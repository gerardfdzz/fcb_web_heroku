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
  nextPlayerId: any;
  previousPlayerId: any;

  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute, public navigation: NavigationService, private translate: TranslateService, public router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.goalkeeper = this.playersService.getPlayerById(this.id);

    this.navigation.startSaveHistory();

    this.nextPlayerId = this.goalkeeper.id + 1;

    if (this.goalkeeper.id == 1) {
      this.previousPlayerId = 25;
    } else {
      this.previousPlayerId = this.goalkeeper.id - 1;
    }
  }

  getLang() {
    return this.translate.currentLang;
  }

  allPlayers: any = this.playersService.getAllPlayers();

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
