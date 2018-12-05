// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Website-Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectorComponent } from './selector/selector.component';
import { TempediaComponent } from './tempedia/tempedia.component';
import { TemtemEntryComponent } from './tempedia/temtem-entry/temtem-entry.component';
import { CarouselComponent } from './tempedia/carousel/carousel.component';
import { UserInfoComponent } from './navbar/user-info/user-info.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentFormComponent } from './tournament/tournament-form/tournament-form.component';

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
    TournamentComponent,
    TournamentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    SlickCarouselModule,
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
