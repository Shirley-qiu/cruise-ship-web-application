import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catering } from 'src/app/models/catering';
import { CateringService } from 'src/app/shared/services/catering.service';

@Component({
  selector: 'app-catering-details',
  templateUrl: './catering-details.component.html',
  styleUrls: ['./catering-details.component.css']
})
export class CateringDetailsComponent implements OnInit {

  @Input() item: Catering;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentItem: Catering = {
    title: '',
    quantity: 0
  };
  message = '';

  constructor(private cateringService: CateringService) { }

  ngOnInit(): void {
    this.message = '';
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

    if (this.currentItem.id) {
      this.cateringService.update(this.currentItem.id, data)
        .then(() => this.message = 'The item was updated successfully!')
        .catch(err => console.log(err));
    }
  }

}
