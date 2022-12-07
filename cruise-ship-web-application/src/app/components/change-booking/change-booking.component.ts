import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Amenity } from '../../models/amenity';
import { AmenityService } from 'src/app/shared/services/amenity.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-booking',
  templateUrl: './change-booking.component.html',
  styleUrls: ['./change-booking.component.css']
})
export class ChangeBookingComponent implements OnInit {
  amenity: Amenity = {
    id: '',
    description: '',
    title: '',
    available: true
  }

  @ViewChild('amenityForm', { static: false }) form: any;

  constructor(
    private router: Router,
    private amenityService: AmenityService
  ) { }

  ngOnInit(): void {
  }

  onSubmit({value, valid}: NgForm) {
    if(!valid) {
      //Show Error
      window.alert("Please fill out the form correctly");
    } else {
      // Add amenity to schedule
      this.amenityService.newAmenity(value);
      // show message
      window.alert("Amenity added to schedule");
      this.router.navigate(['/']);
    }
  }
}
