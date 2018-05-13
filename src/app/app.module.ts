import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { TimeDistortionComponent } from './time-distortion/time-distortion.component';
import { DistortionsComponent } from './time-distortion/distortions/distortions.component';
import { ShipyardComponent } from './shipyard/shipyard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { ScheduleComponent } from './time-distortion/schedule/schedule.component';
import { HeaderComponent } from './shared/header/header.component';

/*
 * app Routing table
 */
const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'time-distortion', component: TimeDistortionComponent },
  { path: 'shipyard', component: ShipyardComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: LandingComponent }
];

/*
 * App modules
 */
@NgModule({
  declarations: [
    AppComponent,
    TimeDistortionComponent,
    DistortionsComponent,
    ShipyardComponent,
    FooterComponent,
    LandingComponent,
    SideBarComponent,
    ScheduleComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
