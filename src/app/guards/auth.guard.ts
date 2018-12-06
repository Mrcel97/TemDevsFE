import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DiscordAuthService } from '../shared/services/discord-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private discordAuth: DiscordAuthService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.discordAuth.isAuthenticated()) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }
}
