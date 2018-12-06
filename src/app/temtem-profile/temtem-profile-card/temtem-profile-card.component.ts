import { Component, OnInit } from '@angular/core';
import { Gender, TemtemProfile } from './../../shared/models/temtem-profile';

@Component({
  selector: 'app-temtem',
  templateUrl: './temtem-profile-card.component.html',
  styleUrls: ['./temtem-profile-card.component.scss']
})
export class TemtemProfileCardComponent implements OnInit {

  public profile: TemtemProfile;
  
  constructor() { }

  ngOnInit() {
  }

  public genderChange(value: Gender) {
    this.profile.gender = value;
  }
}
