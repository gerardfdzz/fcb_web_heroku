import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-goalkeepers-details',
  templateUrl: './goalkeepers-details.component.html',
  styleUrls: ['./goalkeepers-details.component.scss']
})
export class GoalkeepersDetailsComponent implements OnInit {

  id: any;
  goalkeeper: any;
  nextPlayerId: any;

  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute, public navigation: NavigationService, private translate: TranslateService) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.goalkeeper = this.playersService.getPlayerById(this.id);

    this.navigation.startSaveHistory();

    this.nextPlayerId = this.goalkeeper.id + 1;
  }

  getLang() {
    return this.translate.currentLang;
  }

  // reloadCurrentPage() {
  //   window.location.reload();
  // }

  allPlayers: any = this.playersService.getAllPlayers();

  ngOnInit(): void {
    console.log(this.allPlayers);
    console.log(this.goalkeeper);
    console.log("this.id: " + this.id);
    console.log("this.nextPlayer: " + this.nextPlayerId);
  }

}
