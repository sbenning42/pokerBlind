import { Component, OnInit } from '@angular/core';

import { GameContext } from './../../models/game-context';
import { NewBlind } from './../../models/new-blind';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-make-new-blind-list',
  templateUrl: './make-new-blind-list.component.html',
  styleUrls: ['./make-new-blind-list.component.css'],
})
export class MakeNewBlindListComponent implements OnInit {

  bet: number;
  duration: number;

  blinds: NewBlind[];

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.game.context$.subscribe(
      (context: GameContext) => this.blinds = context.blinds
    );
  }

  addBlind() {
    if (this.duration > 999) { this.duration = +Infinity; }
    console.log(this.duration);
    this.game.addBlind(new NewBlind(this.bet, +this.duration));
    this.bet = undefined;
    this.duration = undefined;
  }

  saveBlind(blind: NewBlind, index: number) {
    this.game.saveBlind(blind, index);
  }

  deleteBlind(blind: NewBlind, index: number) {
    this.game.deleteBlind(blind, index);
  }

}
