import { DiscordUser } from './../../shared/models/discord.user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() public discordUser: DiscordUser;

  constructor() { }

  ngOnInit() {
  }

}
