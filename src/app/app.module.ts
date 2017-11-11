import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* App Modules */

import { RoutingModule } from './modules/routing/routing.module';
import { MaterialLoaderModule } from './modules/material-loader/material-loader.module';

/* App Services */

import { NewPlayerService } from './services/new-player.service';
import { NewBlindService } from './services/new-blind.service';
import { NewTurnService } from './services/new-turn.service';
import { GameService } from './services/game.service';
import { ContextService } from './services/context.service';

/* App SharedComponents */

import { NewGameComponent } from './shared-components/new-game/new-game.component';
import { BackToWelcomeComponent } from './shared-components/back-to-welcome/back-to-welcome.component';

/* App Components */

import { MakeNewPlayerListComponent } from './components/make-new-player-list/make-new-player-list.component';
import { MakeNewBlindListComponent } from './components/make-new-blind-list/make-new-blind-list.component';

import { NewTurnResumeComponent } from './components/new-turn-resume/new-turn-resume.component';
import { NewPlayersResumeComponent } from './components/new-players-resume/new-players-resume.component';
import { NextTurnComponent } from './shared-components/next-turn/next-turn.component';

/* App Views */

import { WelcomeViewComponent } from './views/welcome-view/welcome-view.component';
import { ConfigureViewComponent } from './views/configure-view/configure-view.component';
import { PlayViewComponent } from './views/play-view/play-view.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewComponent,
    ConfigureViewComponent,
    PlayViewComponent,
    BackToWelcomeComponent,
    NextTurnComponent,
    NewGameComponent,
    MakeNewPlayerListComponent,
    MakeNewBlindListComponent,
    NewTurnResumeComponent,
    NewPlayersResumeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /* App Modules */
    RoutingModule,
    MaterialLoaderModule,
  ],
  providers: [
    /* App Services */
    NewPlayerService,
    NewBlindService,
    NewTurnService,
    GameService,
    ContextService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
