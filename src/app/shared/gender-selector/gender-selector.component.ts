import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gender } from '../models/temtem-profile';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: ['./gender-selector.component.scss']
})
export class GenderSelectorComponent implements OnInit {

  @Output() public gender = new EventEmitter<Gender>();

  constructor() { }

  ngOnInit() {
    this.gender.emit(Gender.MALE);
  }

  public genderChange(value) {
    if (value === 'male') {
      this.gender.emit(Gender.MALE);
    } else {
      this.gender.emit(Gender.FEMALE);
    }
    
  }
}
