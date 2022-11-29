import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Amenity } from 'src/app/models/amenity';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmenityService {
  amenityCollection: AngularFirestoreCollection<Amenity>;
  amenityDoc: AngularFirestoreDocument<Amenity>;
  amenities: Observable<Amenity[]>;
  amenity: Observable<Amenity>;

  constructor(private afs: AngularFirestore) { 
    this.amenityCollection = this.afs.collection('amenities', 
    ref => ref.orderBy('title', 'asc'));
  }

  getAmenities(): Observable<Amenity[]> {
    // Grab amenity by id
    this.amenities = this.amenityCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Amenity;
        data.id = action.payload.doc.id;
        return data;
      });
    }));

    return this.amenities;
    
  }

//   getClient(id: string): Observable<Amenity> {
//     this.amenityDoc = this.afs.doc<Amenity>(`amenities/${id}`);
//     this.amenity = this.amenityDoc.snapshotChanges().pipe(map(action => {
//       if(action.payload.exists === false) {
//         return null;
//       } else {
//         const data = action.payload.data() as Amenity;
//         data.id = action.payload.id;
//         return data;
//       }
//     }));
//     return this.amenity;
//   }
}
