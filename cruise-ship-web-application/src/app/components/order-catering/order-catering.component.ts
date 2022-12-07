import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CateringComponent } from '../catering/catering.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catering } from 'src/app/models/catering';
import { CateringService } from '../../shared/services/catering.service';
import { map } from 'rxjs/operators';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-order-catering',
  templateUrl: './order-catering.component.html',
  styleUrls: ['./order-catering.component.css']
})
export class OrderCateringComponent implements OnInit {
  @Input() item1: Catering;
  @Output() refreshList1: EventEmitter<any> = new EventEmitter();

  items?: Catering[];
  editState: boolean = false;
  itemToEdit: Catering;
  message = '';
  currentItem?: Catering;
  currentIndex = -1;
  title = '';
  arrTitle: string[] = [];
  arrQuan: number[] = [];
  order: OrdersComponent;

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

  ngOnChanges(): void {
    this.message = '';
    this.currentItem = { ...this.item1 };
  }

  editItem(item: Catering){
    this.editState = true;
    this.itemToEdit = item;
  }


  setActiveItem(item: Catering, index: number, title: string, quan: number): void {
    this.currentItem = item;
    this.currentIndex = index;
    this.order.arrTitle[index] = title;
    this.order.arrQuan[index] = quan;
    this.order.index = index;
  }

  refreshList(): void {
    this.currentItem = undefined;
    this.currentIndex = -1;
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.cateringService.getOrder().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.items = data;
    });
  }
}
