import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Catering } from 'src/app/models/catering';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CateringService {
  cateringCollection: AngularFirestoreCollection<Catering>;
  catering: Observable<Catering[]>;
  cateringDoc: AngularFirestoreDocument<Catering>;
  cater: Observable<Catering>;
  orderingCollection: AngularFirestoreCollection<Catering>;
  orderingDoc: AngularFirestoreDocument<Catering>;

  constructor(private afs: AngularFirestore) {
    this.cateringCollection = this.afs.collection('catering', 
    ref => ref.orderBy('title', 'asc'));
    
    this.orderingCollection = this.afs.collection('orders', 
    ref => ref.orderBy('title', 'asc'));
   }

   getItem(): Observable<Catering[]> {
    this.catering = this.orderingCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Catering;
        data.id = action.payload.doc.id;
        return data;
      });
    }));

    return this.catering;
    
  }

  updateItem(item: Catering){
    this.cateringDoc = this.afs.doc('catering/${item.id}');
    this.cateringDoc.update(item);
  }

  getAll(): AngularFirestoreCollection<Catering> {
    return this.cateringCollection;
  }

  getOrder(): AngularFirestoreCollection<Catering> {
    return this.orderingCollection;
  }

  update(id: string, data: any): Promise<void> {
    return this.cateringCollection.doc(id).update(data);
  }

  updateOrder(id: string, data: any): Promise<void> {
    return this.orderingCollection.doc(id).update(data);
  }
}
