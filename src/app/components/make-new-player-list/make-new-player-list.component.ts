import { Component, OnInit } from '@angular/core';

import { NewPlayer } from './../../models/new-player';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-make-new-player-list',
  templateUrl: './make-new-player-list.component.html',
  styleUrls: ['./make-new-player-list.component.css'],
})
export class MakeNewPlayerListComponent implements OnInit {

  name: string;
  players: NewPlayer[];

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.game.context$.subscribe(
      context => this.players = context.players
    );
  }

  addPlayer() {
    this.game.addPlayer(new NewPlayer(this.name));
    this.name = undefined;
  }

  savePlayer(player: NewPlayer, index: number) {
    this.game.savePlayer(player, index);
  }

}
