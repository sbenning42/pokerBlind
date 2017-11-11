import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GameService } from './../../services/game.service';
import { NewTurn } from './../../models/new-turn';

@Component({
  selector: 'app-new-players-resume',
  templateUrl: './new-players-resume.component.html',
  styleUrls: ['./new-players-resume.component.css'],
})
export class NewPlayersResumeComponent implements OnInit, OnDestroy {

  currentTurn: NewTurn;
  sub: Subscription;

  blindDurationIsFinite: boolean;
  nextBlindDurationIsFinite: boolean;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.sub = this.game.currentTurn$
      .do((currentTurn: NewTurn) => {
        this.blindDurationIsFinite = isFinite(currentTurn.blind.duration);
        this.nextBlindDurationIsFinite = isFinite(currentTurn.nextBlind.duration);
      })
      .subscribe((currentTurn: NewTurn) => this.currentTurn = currentTurn);
  }

  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
