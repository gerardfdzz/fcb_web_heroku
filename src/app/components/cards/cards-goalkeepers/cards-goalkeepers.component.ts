import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cards-goalkeepers',
  templateUrl: './cards-goalkeepers.component.html',
  styleUrls: ['./cards-goalkeepers.component.scss']
})
export class CardsGoalkeepersComponent {

  constructor(private translate: TranslateService) { }

  getLang() {
    return this.translate.currentLang;
  }

  @Input() goalkeeper?: any;

}
