import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent implements OnInit {

  @Output() newGameEvent = new EventEmitter();

  constructor(
    private game: GameService,
  ) { }

  ngOnInit() {
  }

  newGame() {
    this.game.reNew();
    this.newGameEvent.emit();
  }

}
