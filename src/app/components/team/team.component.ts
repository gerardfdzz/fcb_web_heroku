import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  goalkeepers: any = this.playersService.getGoalkeepers();
  defenders: any = this.playersService.getDefenders();
  midfielders: any = this.playersService.getMidfielders();
  forwards: any = this.playersService.getForwards();
  coach: any = this.playersService.getCoach();

}
