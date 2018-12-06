// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Website-Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectorComponent } from './selector/selector.component';
import { TempediaComponent } from './tempedia/tempedia.component';
import { TemtemEntryComponent } from './tempedia/temtem-entry/temtem-entry.component';
import { CarouselComponent } from './tempedia/carousel/carousel.component';
import { UserInfoComponent } from './navbar/user-info/user-info.component';
import { TemtemProfileComponent } from './temtem-profile/temtem-profile.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentFormComponent } from './tournament/tournament-form/tournament-form.component';
import { DiscordProfileCardComponent } from './temtem-profile/discord-profile-card/discord-profile-card.component';
import { TemtemProfileCardComponent } from './temtem-profile/temtem-profile-card/temtem-profile-card.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SelectorComponent,
    TempediaComponent,
    TemtemEntryComponent,
    CarouselComponent,
    UserInfoComponent,
    TemtemProfileComponent,
    TournamentComponent,
    TournamentFormComponent,
    DiscordProfileCardComponent,
    TemtemProfileCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    BrowserAnimationsModule,
    HttpClientModule,    
    SlickCarouselModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
