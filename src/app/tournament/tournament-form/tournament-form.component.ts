import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';

import { TournamentService } from './../../services/tournament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['../tournament.component.scss']
})
export class TournamentFormComponent implements OnInit {

  actualTab = 0;
  sliderValue;
  date = new Date();
  teams = 0;
  tabs = ['Setup'];
  selected = new FormControl(0);

  // Form values:
  tournamentOwner = '';
  tournamentDate: Date;
  tournamentName = '';
  tournamentTeamSize = 1;
  tournamentPrize: boolean = false
  tournamentPrizeName = '';
  tournamentDesc = '';
  tournamentRules: { [id: string]: boolean; } = {};

  constructor( 
      public router: Router,
      private tournamentService: TournamentService 
    ) { }

  ngOnInit() {
    this.tournamentOwner = 'Admin' // session.name
    this.tournamentDate = new Date();
  }

  addTab(selectAfterAdding: boolean) {
    this.teams = this.teams+=1;
    this.tabs.push('Team ' + this.teams);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    if (index != 0) {
      this.tabs.splice(index, 1);
    }
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.actualTab = event.index;
  }

  formatLabel(value: number | null) {
    return value;
  }

  submitForm() {
    console.log(
      '\nTournament From Data: ' + '\n' +
      'Owner: '             + this.tournamentOwner      + '\n' +
      'Date: '              + this.tournamentDate       + '\n' +
      'Name: '              + this.tournamentName       + '\n' +
      'Team size: '         + this.tournamentTeamSize   + '\n' +
      'Prize: '             + this.tournamentPrize      + '\n' +
      'Prize name: '        + this.tournamentPrizeName  + '\n' +
      'Tournament desc:'    + this.tournamentDesc       + '\n' +
      'Tournament rules: ', this.tournamentRules
    );
  }

}
