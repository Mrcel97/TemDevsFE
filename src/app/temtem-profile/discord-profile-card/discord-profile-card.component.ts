import { Component, OnInit, Input } from '@angular/core';
import { DiscordUser } from './../../shared/models/discord.user';

@Component({
  selector: 'app-discord-profile-card',
  templateUrl: './discord-profile-card.component.html',
  styleUrls: ['./discord-profile-card.component.scss']
})
export class DiscordProfileCardComponent implements OnInit {
  @Input() user: DiscordUser;
  
  constructor() { }

  ngOnInit() {
  }

}
