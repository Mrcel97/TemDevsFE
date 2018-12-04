import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiscordUser } from '../models/discord.user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DiscordAuthService {

  private discordScopes = ['identify', 'email'];
  private discordApi = 'https://discordapp.com/api';
  private discordAuthUrl = 'https://discordapp.com/oauth2/authorize';
  private discordClientId = '518762893039370243';

  private credentials: { tokenType: string, accessToken: string, expiresIn: number };

  private authUser: DiscordUser;

  /**
   * Notify listeners when authUser changes
   */
  public userChange$ = new Subject<DiscordUser>();

  constructor(private http: HttpClient) { }

  /**
   * Generates url that redirects to Discord auth page
   */
  public generateDiscordAuthUrl() {
    return `${this.discordAuthUrl}?client_id=${this.discordClientId}&redirect_uri=${environment.discordUrlCallback}&response_type=token&scope=${this.discordScopes.join("%20")}`;
  }

  /**
   * Retrieves the access token from the url
   * @param url Url containing the access_token of discord
   * @returns True if token has been successfully fetched otherwise False
   */
  public tokenFromUrl(url: string): boolean {
    this.credentials = {
      tokenType: this.getParameterByName('token_type', url),
      accessToken: this.getParameterByName('access_token', url),
      expiresIn: Number(this.getParameterByName('expires_in', url))
    };
    return this.credentials.accessToken != null;
  }

  /**
   * Get current discord user info.
   * Requires authentication
   */
  public getUser(): Observable<DiscordUser> {
    if (this.isAuthenticated()) {
      return of(this.authUser);
    }
    return this.http.get<DiscordUser>(this.discordApi + '/users/@me', this.getAuthHeaders()).pipe(
      map(res => {
        // Generating avatar url. See models/discord.user.ts
        res.avatar = `https://cdn.discordapp.com/avatars/${res.id}/${res.avatar}.png`;
        this.authUser = res;
        this.userChange$.next(this.authUser);
        localStorage.setItem('user', JSON.stringify(res));
        return res;
      })
    );
  }

  /**
   * Generate headers authentication headers using Bearer token
   */
  private getAuthHeaders() {
    return {
      headers: new HttpHeaders()
                    .set('Authorization',  this.credentials.tokenType + ' ' + this.credentials.accessToken)
    };
  }

  /**
   * Example:
   *  url: http://localhost:4200/#access_token=bhQjBPyLhfDmucLDntPOn8UFWO5Ept&token_type=Bearer&expires_in=604800&scope=identify%20email
   *  name: token_type
   *  return value: Bearer
   * @param name Name of parameter
   * @param url Url where the parameter should be fetched
   */
  private getParameterByName(name, url) {

    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[#&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  /**
   * Returns true if user is authenticated
   */
  public isAuthenticated(): boolean {
    this.getUserFromStorage();
    return !isNullOrUndefined(this.authUser);
  }

  /**
   * Remove user credentials
   */
  public logout(): void {
    this.authUser = null;
    this.credentials = null;
    this.userChange$.next(null);
  }

  /**
   * If the user is in memory returns it, if not gets it from local storage
   */
  private getUserFromStorage(): DiscordUser {
    if (this.authUser !== null) {
      return this.authUser;
    } else {
      this.authUser = JSON.parse(localStorage.getItem('user'));
      if (!isNullOrUndefined(this.authUser)) {
        this.userChange$.next(this.authUser);
      }
      return this.authUser;
    }
  }
}
