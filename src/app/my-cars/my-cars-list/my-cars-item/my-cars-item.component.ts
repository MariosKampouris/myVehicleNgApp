import { Component, Input } from '@angular/core';
import { MyCars } from '../../my-cars.model';

@Component({
  selector: 'app-my-cars-item',
  templateUrl: './my-cars-item.component.html',
  styleUrls: ['./my-cars-item.component.css']
})
export class MyCarsItemComponent {
  @Input() car: MyCars;
  @Input() index: number;

  ngOnInit(){
  }
}
