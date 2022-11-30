import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catering } from 'src/app/models/catering';
import { CateringService } from '../../shared/services/catering.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  items: Catering[];

  imagesData: any = [
    "./assets/burger.jpeg",
    "./assets/chicken.jpeg",
    "./assets/pasta.jpeg",
    "./assets/salad.jpeg",
    "./assets/steak.jpeg",
  ];
  
  constructor(private cateringService: CateringService) { }

  ngOnInit(): void {
    this.cateringService.getItem().subscribe(items => this.items = items);

  }
  
  // static checkAvailability(x: any){
    
  // }
}
