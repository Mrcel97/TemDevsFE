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


  constructor( 
      public router: Router,
      private tournamentService: TournamentService 
    ) { }

  ngOnInit() {
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

}
