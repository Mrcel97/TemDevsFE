import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemService } from './services/temtem.service';
import { DiscordAuthService } from './services/discord-auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    
  ],
  providers: [
    TemtemService,
    DiscordAuthService
  ],
  declarations: []
})
export class SharedModule { }
