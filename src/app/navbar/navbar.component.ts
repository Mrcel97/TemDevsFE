import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscordAuthService } from '../services/discord-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public discordAuthUrl: string;

  constructor(private http: HttpClient, 
    private discordAuth: DiscordAuthService) { 
    
    this.discordAuthUrl = this.discordAuth.generateDiscordAuthUrl();
  }

  ngOnInit() {
    if (this.discordAuth.tokenFromUrl(location.href))
      this.discordAuth.getUser().subscribe(console.log);
  }
}
