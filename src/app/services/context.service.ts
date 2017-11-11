import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { GameContext } from './../models/game-context';
import { NewPlayer } from './../models/new-player';
import { NewBlind } from './../models/new-blind';

@Injectable()
export class ContextService {

  private context: GameContext;
  private context$: BehaviorSubject<GameContext>;

  constructor() {
    this.context = new GameContext();
    this.context$ = new BehaviorSubject(this.context);
  }

  private notify() {
    this.context$.next(this.context);
  }

  getContext(): Observable<GameContext> {
    return this.context$.asObservable();
  }

  setContext(turn: number, players: NewPlayer[], blinds: NewBlind[]) {
    this.context = new GameContext(turn, players, blinds);
    this.notify();
  }

}
