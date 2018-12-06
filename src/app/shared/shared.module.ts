import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemtemService } from './services/temtem.service';
import { DiscordAuthService } from './services/discord-auth.service';
import { GenderSelectorComponent } from './gender-selector/gender-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GenderSelectorComponent
  ],
  providers: [
    TemtemService,
    DiscordAuthService
  ],
  declarations: [GenderSelectorComponent]
})
export class SharedModule { }
