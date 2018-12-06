import { DiscordUser } from './../shared/models/discord.user';
import { DiscordAuthService } from './../shared/services/discord-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temtem-profile',
  templateUrl: './temtem-profile.component.html',
  styleUrls: ['./temtem-profile.component.scss']
})
export class TemtemProfileComponent implements OnInit {

  public user: DiscordUser;

  constructor(private discord: DiscordAuthService) { }

  ngOnInit() {
    this.discord.getUser().subscribe(res => this.user = res);
  }

}
