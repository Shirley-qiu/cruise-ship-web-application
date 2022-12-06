import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catering } from 'src/app/models/catering';
import { CateringService } from '../../shared/services/catering.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  items?: Catering[];
  currentItem?: Catering;
  currentIndex = -1;
  title = '';

  imagesData: any = [
    "./assets/burger.jpeg",
    "./assets/chicken.jpeg",
    "./assets/pasta.jpeg",
    "./assets/salad.jpeg",
    "./assets/steak.jpeg",
  ];
  
  constructor(private cateringService: CateringService) {};

  ngOnInit(): void {
    this.retrieveItems();
  }

  refreshList(): void {
    this.currentItem = undefined;
    this.currentIndex = -1;
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.cateringService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.items = data;
    });
  }

  setActiveItem(item: Catering, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }
}
