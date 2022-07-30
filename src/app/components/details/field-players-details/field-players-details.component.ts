import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field-players-details',
  templateUrl: './field-players-details.component.html',
  styleUrls: ['./field-players-details.component.scss']
})
export class FieldPlayersDetailsComponent implements OnInit {

  id: any;
  fieldPlayer: any;
  nextPlayerId: any;
  previousPlayerId: any;

  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute, public navigation: NavigationService, private translate: TranslateService, public router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.fieldPlayer = this.playersService.getPlayerById(this.id);

    this.navigation.startSaveHistory();

    this.previousPlayerId = this.fieldPlayer.id - 1;

    if (this.fieldPlayer.id == 25) {
      this.nextPlayerId = 1;
    } else {
      this.nextPlayerId = this.fieldPlayer.id + 1;
    }
  }

  getLang() {
    return this.translate.currentLang;
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
