import { AuthGuard } from './guards/auth.guard';
// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SelectorComponent } from './selector/selector.component';
import { TempediaComponent } from './tempedia/tempedia.component';
import { TemtemProfileComponent } from './temtem-profile/temtem-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'selector', component: SelectorComponent},
  {path: 'tempedia', component: TempediaComponent},
  {path: 'temtem-profile', component: TemtemProfileComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
