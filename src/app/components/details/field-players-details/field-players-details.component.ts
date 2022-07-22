import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-field-players-details',
  templateUrl: './field-players-details.component.html',
  styleUrls: ['./field-players-details.component.scss']
})
export class FieldPlayersDetailsComponent implements OnInit {

  id: any;
  fieldPlayer: any;

  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute, public navigation:NavigationService) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.fieldPlayer = this.playersService.getPlayerById(this.id);

    this.navigation.startSaveHistory();
  }

  ngOnInit(): void {
  }

}
