import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-coach',
  templateUrl: './card-coach.component.html',
  styleUrls: ['./card-coach.component.scss']
})
export class CardCoachComponent {

  constructor() { }

  @Input() coach?: any;

}
