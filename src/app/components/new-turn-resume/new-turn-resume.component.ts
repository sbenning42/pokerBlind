import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GameService } from './../../services/game.service';
import { NewTurn } from './../../models/new-turn';

@Component({
  selector: 'app-new-turn-resume',
  templateUrl: './new-turn-resume.component.html',
  styleUrls: ['./new-turn-resume.component.css'],
})
export class NewTurnResumeComponent implements OnInit, OnDestroy {

  currentTurn: NewTurn;
  sub: Subscription;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.sub = this.game.currentTurn$.subscribe((currentTurn: NewTurn) => this.currentTurn = currentTurn);
  }

  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe(); }
  }

}
