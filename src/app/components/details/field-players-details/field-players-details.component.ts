import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
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
  previousPlayer: any;
  nextPlayer: any;
  allPlayers: any;

  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute, private translate: TranslateService, public router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getLang() {
    return this.translate.currentLang;
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.playersService.getPlayerById(this.id).subscribe((data) => {
      this.fieldPlayer = data[0];
    });
    this.allPlayers = this.playersService.getAllPlayers().subscribe((data) => {
      this.previousPlayer = data[this.id - 2];
      this.nextPlayer = data[this.id];

      if (this.fieldPlayer.id == (data.length - 1)) {
        this.nextPlayer = data[0];
      } else {
        this.nextPlayer.id = this.fieldPlayer.id + 1;
      }
    });
  }

}
