import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goalkeepers-details',
  templateUrl: './goalkeepers-details.component.html',
  styleUrls: ['./goalkeepers-details.component.scss']
})
export class GoalkeepersDetailsComponent implements OnInit {

  id: any;
  goalkeeper: any;
  previousPlayer: any;
  nextPlayer: any;
  previousPlayerId: any;
  nextPlayerId: any;
  allPlayers: any;
  
  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute, public navigation: NavigationService, private translate: TranslateService, public router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.goalkeeper = this.playersService.getPlayerById(this.id);

    this.navigation.startSaveHistory();

    this.allPlayers = this.playersService.getAllPlayers();

    this.previousPlayer = this.allPlayers[this.id - 2];
    this.nextPlayer = this.allPlayers[this.id];

    this.nextPlayerId = this.goalkeeper.id + 1;

    if (this.goalkeeper.id == 1) {
      this.previousPlayerId = 25;
      this.previousPlayer = this.allPlayers[24];
    } else {
      this.previousPlayerId = this.goalkeeper.id - 1;
    }
  }

  getLang() {
    return this.translate.currentLang;
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
