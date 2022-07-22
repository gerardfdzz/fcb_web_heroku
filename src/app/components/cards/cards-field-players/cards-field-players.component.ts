import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-field-players',
  templateUrl: './cards-field-players.component.html',
  styleUrls: ['./cards-field-players.component.scss']
})
export class CardsFieldPlayersComponent {

  constructor() { }

  @Input() fieldPlayer?: any;

}
