import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  actualTab = 0;
  date = new Date();
  teams = 0;
  slider = 0;
  tabs = ['Setup'];
  selected = new FormControl(0);

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
    this.slider = value;
    return value;
  }

}
