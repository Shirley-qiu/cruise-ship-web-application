import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catering } from 'src/app/models/catering';
import { CateringService } from 'src/app/shared/services/catering.service';
import { ModifyCateringComponent } from '../modify-catering/modify-catering.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() item: Catering;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentItem: Catering = {
    title: '',
    quantity: 0
  };
  message = '';
  modify: ModifyCateringComponent;
  items?: Catering[];
  arrTitle: string[] = [];
  arrQuan: number[] = [];
  index: number;

  constructor(private cateringService: CateringService) { }

  ngOnInit(): void {
    this.message = '';
    this.cateringService.getItem().subscribe(items => this.items = items);
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentItem = { ...this.item };
  }

  updateItem(): void {
    const data = {
      title: this.currentItem.title,
      quantity: this.currentItem.quantity,
    };

    this.arrTitle[this.index] = this.currentItem.title;
    this.arrQuan[this.index] = this.currentItem.quantity;

    if (this.currentItem.id) {
      this.cateringService.updateOrder(this.currentItem.id, data)
        .then(() => this.message = 'The item was updated successfully!')
        .catch(err => console.log(err));
    }

  }

  // getArr(arr1: string[], arr2: number[]){
  //   this.arrTitle = arr1;
  //   this.arrQuan = arr2;
  // }
  

}
