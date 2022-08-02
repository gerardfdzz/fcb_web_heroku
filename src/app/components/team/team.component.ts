import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  goalkeepers: any;
  defenders: any;
  midfielders: any;
  forwards: any;
  coach: any;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getGoalkeepers("goalkeeper").subscribe((data) => {
      this.goalkeepers = data;
    });

    this.playersService.getDefenders("defender").subscribe((data) => {
      this.defenders = data;
    });

    this.playersService.getMidfielders("midfielder").subscribe((data) => {
      this.midfielders = data;
    });

    this.playersService.getForwards("forward").subscribe((data) => {
      this.forwards = data;
    });

    this.playersService.getCoach("coach").subscribe((data) => {
      this.coach = data;
    });
  }
}
