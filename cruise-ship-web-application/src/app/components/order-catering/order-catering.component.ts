import { Component, OnInit } from '@angular/core';
import { CateringComponent } from '../catering/catering.component';

@Component({
  selector: 'app-order-catering',
  templateUrl: './order-catering.component.html',
  styleUrls: ['./order-catering.component.css']
})
export class OrderCateringComponent implements OnInit {
  cart = new Array();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(x: any){
    this.cart.push(x);
    console.log("cart: ", this.cart);
    CateringComponent.checkAvailability(this.cart[this.cart.length - 1]);
  }

  showCart(){
    //sends cart to html
  }
}
