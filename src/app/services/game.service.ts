import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NewTurnService } from './../services/new-turn.service';
import { NewBlindService } from './../services/new-blind.service';
import { NewPlayerService } from './../services/new-player.service';
import { ContextService } from './../services/context.service';

import { NewTurn } from './../models/new-turn';
import { NewBlind } from './../models/new-blind';
import { NewPlayer } from './../models/new-player';
import { GameContext } from './../models/game-context';

@Injectable()
export class GameService {

  currentTurn: NewTurn;
  currentTurn$: Observable<NewTurn>;

  context$: Observable<GameContext>;

  constructor(
    private turnService: NewTurnService,
    private blindService: NewBlindService,
    private playerService: NewPlayerService,
    private contextService: ContextService
  ) {
    this.reNew();
    this.context$ = this.contextService.getContext();
    this.currentTurn$ = this.turnService.getCurrentTurn();

    this.currentTurn$.subscribe(
      (currentTurn: NewTurn) => this.currentTurn = currentTurn
    );

  }

  addPlayer(player: NewPlayer) {
    this.contextService.setContext(
      this.currentTurn.turn,
      this.playerService.addPlayer(player),
      this.blindService.blinds);
  }

  savePlayer(player: NewPlayer, i: number) {
    this.contextService.setContext(
      this.currentTurn.turn,
      this.playerService.savePlayer(player, i),
      this.blindService.blinds);
  }


  addBlind(blind: NewBlind) {
    this.contextService.setContext(
      this.currentTurn.turn,
      this.playerService.players,
      this.blindService.addBlind(blind));
  }

  saveBlind(blind: NewBlind, i: number) {
    this.contextService.setContext(
      this.currentTurn.turn,
      this.playerService.players,
      this.blindService.saveBlind(blind, i));
  }

  deleteBlind(blind: NewBlind, i: number) {
    this.contextService.setContext(
      this.currentTurn.turn,
      this.playerService.players,
      this.blindService.deleteBlind(blind, i));
  }


  nextTurn() {
    this.contextService.setContext(
      this.currentTurn.turn + 1,
      this.playerService.players,
      this.blindService.blinds);
  }

  reNew() {
    this.contextService.setContext(0,
      this.playerService.players,
      this.blindService.blinds);
  }

  reset() {
    this.playerService.reNew();
    this.blindService.reNew();
    this.reNew();
  }

}
