import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CateringComponent } from '../catering/catering.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catering } from 'src/app/models/catering';
import { CateringService } from '../../shared/services/catering.service';
import { map } from 'rxjs/operators';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-modify-catering',
  templateUrl: './modify-catering.component.html',
  styleUrls: ['./modify-catering.component.css']
})
export class ModifyCateringComponent implements OnInit {
  @Input() item1: Catering;
  items?: Catering[];
  message = '';
  currentItem?: Catering;
  currentIndex = -1;
  title = '';
  order: OrdersComponent;

  arrTitle: string[];
  arrQuan: number[];

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
    this.arrTitle = this.order.arrTitle;
    this.arrQuan = this.order.arrQuan;
  }
  setActiveItem(item: Catering, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  confirmOrder(): void{
  }
  
}
