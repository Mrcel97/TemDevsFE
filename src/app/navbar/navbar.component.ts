import { DiscordUser } from './../models/discord.user';
import { Component, OnInit } from '@angular/core';
import { DiscordAuthService } from '../services/discord-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public discordAuthUrl: string;
  public user: DiscordUser;

  constructor(public discordAuth: DiscordAuthService) {
    this.discordAuthUrl = this.discordAuth.generateDiscordAuthUrl();
  }

  ngOnInit() {
    this.discordAuth.userChange$.subscribe(res => this.user = res);
    console.log(this.discordAuth.tokenFromUrl(location.href));

    if (this.discordAuth.tokenFromUrl(location.href)) {
      this.discordAuth.getUser().subscribe(res => console.log(res));
    }
  }
}
