import { Router } from '@angular/router';
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

  constructor(private discordAuth: DiscordAuthService,
              private router: Router) {
    this.discordAuthUrl = this.discordAuth.generateDiscordAuthUrl();
  }

  ngOnInit() {
    this.discordAuth.userChange$.subscribe(res => this.user = res);
    this.discordAuth.getUser().subscribe();
  }

  public logout() {
    this.discordAuth.logout();
    this.router.navigateByUrl('/');
  }
}
