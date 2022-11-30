import { Component, OnInit } from '@angular/core';
import { CateringComponent } from '../catering/catering.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catering } from 'src/app/models/catering';
import { CateringService } from '../../shared/services/catering.service';

@Component({
  selector: 'app-order-catering',
  templateUrl: './order-catering.component.html',
  styleUrls: ['./order-catering.component.css']
})
export class OrderCateringComponent implements OnInit {
  cart = new Array();
  items: Catering[];
  editState: boolean = false;
  itemToEdit: Catering;

  constructor(private cateringService: CateringService) { }

  ngOnInit(): void {
    this.cateringService.getItem().subscribe(items => this.items = items);
  }

  selectItem(x: any){
    this.cart.push(x);
  }


  editItem(item: Catering){
    this.editState = true;
    this.itemToEdit = item;
  }
}
