import { Component } from '@angular/core';
import { MyCars } from '../my-cars.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { myCarsService } from '../my-cars.service';

@Component({
  selector: 'app-my-cars-list',
  templateUrl: './my-cars-list.component.html',
  styleUrls: ['./my-cars-list.component.css']
})
export class MyCarsListComponent {
  cars: MyCars[];
  subscription: Subscription;

  constructor(private router: Router, private myCarsService: myCarsService){

  }



  ngOnInit(){
    this.subscription = this.myCarsService.carsChanged
      .subscribe((cars: MyCars[]) => {
        this.cars = cars;
      });
    this.cars = this.myCarsService.getCars();
    console.log(this.cars);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onNewCar(){
    
  }
}
