import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-goalkeepers',
  templateUrl: './cards-goalkeepers.component.html',
  styleUrls: ['./cards-goalkeepers.component.scss']
})
export class CardsGoalkeepersComponent {

  constructor() { }

  @Input() goalkeeper?: any;

}
