import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';

import { TournamentService } from './../../services/tournament.service';
import { Router } from '@angular/router';
import { Tournament, Prize, Rule } from '../tournament';

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
  tournament: Tournament;
  tournamentOwner = '';
  tournamentDate: Date;
  tournamentName = '';
  tournamentTeamSize = 1;
  tournamentPrize: boolean = false
  tournamentPrizeDesc = '';
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
    if(this.validFormData()) {
      this.tournament = this.generateTournament();
    };
  }

  validFormData(): boolean {
    if(this.tournamentOwner != null && this.tournamentName != '' && this.tournamentDesc != '') {
      if (this.tournamentPrize && this.tournamentPrizeDesc == '') {
        console.error('Prize selected but not specified!')
        return false;
      } else if (!this.tournamentPrize && this.tournamentPrizeDesc != '') {
        console.error('Prize specified but not activated!')
        return false;
      }
      return true;
    }
    console.error('Invalid general data to build a Tournament Object!')
    return false;
  }

  private generateTournament(): Tournament {
    const prize = new Prize(this.tournamentPrizeDesc, this.tournamentPrize);
    const rules = []

    for (let key in this.tournamentRules) {
      rules.push(new Rule(key, this.tournamentRules[key]));
    }

    return new Tournament(
      this.tournamentName, 
      this.tournamentDesc, 
      this.tournamentOwner, 
      this.tournamentDate,
      prize,
      rules
    );
  }
}
