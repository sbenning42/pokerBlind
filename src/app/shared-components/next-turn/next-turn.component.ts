import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-next-turn',
  templateUrl: './next-turn.component.html',
  styleUrls: ['./next-turn.component.css'],
})
export class NextTurnComponent implements OnInit {

  @Output() nextTurnEvent = new EventEmitter();

  constructor(
    private game: GameService,
  ) { }

  ngOnInit() {
  }

  nextTurn() {
    this.game.nextTurn();
    this.nextTurnEvent.emit();
  }

}
