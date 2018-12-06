import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-team-form',
  templateUrl: './tournament-team-form.component.html',
  styleUrls: ['../tournament.component.scss']
})
export class TournamentTeamFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = new Date();

}
