import { Injectable } from '@angular/core';

import { NewPlayer } from './../models/new-player';

const withDefault = true;

class DefaultPlayerCopy {
  defaultPlayer: NewPlayer[] = [];
  constructor(defaultPlayerToCopy: NewPlayer[]) {
    defaultPlayerToCopy.forEach((defaultPlayer: NewPlayer) => this.defaultPlayer
      .push(new NewPlayer(defaultPlayer.name)));
  }
}

const defaultPlayers: NewPlayer[] = [
  new NewPlayer('Vicky'),
  new NewPlayer('Sam'),
  new NewPlayer('Bob'),
];
@Injectable()
export class NewPlayerService {

  private _players: NewPlayer[];
  public get players(): NewPlayer[] { return this._players; }

  constructor() {
    this.reNew();
  }

  addPlayer(player: NewPlayer): NewPlayer[] {
    const newPlayer = new NewPlayer(player.name);
    this.players.push(newPlayer);
    return this.players;
  }

  savePlayer(player: NewPlayer, i: number): NewPlayer[] {
    const newPlayer = new NewPlayer(player.name);
    this._players[i % this._players.length] = newPlayer;
    return this.players;
  }

  reNew() {
    this._players = withDefault ? (new DefaultPlayerCopy(defaultPlayers)).defaultPlayer : [];
  }

}
