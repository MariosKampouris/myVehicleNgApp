import { Injectable } from "@angular/core";
import { MyCars } from "./my-cars.model";
import { Subject } from "rxjs";

@Injectable()
export class myCarsService{
    carsSelected = new Subject<MyCars>();
    carsChanged = new Subject<MyCars[]>();

    cars: MyCars[] = [
        new MyCars('Alfa Romeo 147',' A simple Car1','https://www.media.stellantis.com/cache/b/a/5/2/7/ba527a76b50596f55440d4ea68287dc1345d3a27.jpeg'),
        new MyCars('Alfa Romeo 159',' A simple Car2','https://upload.wikimedia.org/wikipedia/commons/d/da/Nottingham_Autokarna_MMB_12_Alfa_Romeo_159.jpg'),
    ];

    getCars(){
        return this.cars.slice();
    }

    getCar(index: number){
        return this.cars[index];
    }

    addCar(newCar : MyCars){
        this.cars.push(newCar);
        this.carsChanged.next(this.cars.slice());
    }

    updateCar(index: number, carToUpdate: MyCars){
        this.cars[index] = carToUpdate;
        this.carsChanged.next(this.cars.slice());
    }

    deleteCar(index: number){
        this.cars.splice(index,1);
        this.carsChanged.next(this.cars.slice());
    }

    setCars(cars: MyCars[]){
        this.cars = cars;
        this.carsChanged.next(this.cars.slice());
    }
}