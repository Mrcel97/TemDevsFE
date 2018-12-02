import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DiscordUser } from '../models/discord.user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscordAuthService {

  private discordScopes = ['identify', 'email'];
  private discordApi = 'https://discordapp.com/api';
  private discordAuthUrl = 'https://discordapp.com/oauth2/authorize';
  private discordClientId = '518762893039370243';

  private accessToken: string;

  constructor(private http: HttpClient) { }

  /**
   * Generates url that redirects to Discord auth page
   */
  public generateDiscordAuthUrl() {
    return `${this.discordAuthUrl}?client_id=${this.discordClientId}&redirect_uri=${environment.discordUrlCallback}&response_type=token&scope=${this.discordScopes.join("%20")}`;
  }

  /**
   * 
   * @param url Url containing the access_token of discord
   * @returns True if token has been successfully fetched otherwise False
   */
  public tokenFromUrl(url: string): boolean {
    const regexp = new RegExp(/(#|\&)([^=]+)\=([^&]+)/g);
    const results = regexp.exec(url);
    this.accessToken =  results && results[3];
    return this.accessToken != null;
  }

  /**
   * Get current discord user info. 
   * Requires authentication
   */
  public getUser(): Observable<DiscordUser> {
    return this.http.get<DiscordUser>(this.discordApi + '/users/@me', this.getAuthHeaders());
  }

  /**
   * Generate headers authentication headers using Bearer token
   */
  private getAuthHeaders() {
    return {
      headers: new HttpHeaders().set("Authorization", "Bearer " + this.accessToken)
    };
  }
}
