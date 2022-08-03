import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
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
      this.goalkeeper = data[0];
    });
    
    this.allPlayers = this.playersService.getAllPlayers().subscribe((data) => {
      this.nextPlayer = data[this.id];
      
      if (this.goalkeeper.id == 1) {
        this.previousPlayer = data[data.length - 2];
      } else {
        this.previousPlayer = data[this.id - 2];
      }
    });
  }

}
