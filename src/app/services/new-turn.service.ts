import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { NewTurn } from './../models/new-turn';
import { NewBlind } from './../models/new-blind';
import { NewPlayer } from './../models/new-player';

import { ContextService } from './context.service';
import { GameContext } from './../models/game-context';

@Injectable()
export class NewTurnService {

  private currentTurn: NewTurn;
  private currentTurn$: BehaviorSubject<NewTurn> = new BehaviorSubject(this.currentTurn);

  constructor(
    private contextService: ContextService
  ) {
    this.contextService.getContext().subscribe(
      (context: GameContext) => this.setCurrentTurn(context.turn, context.players, context.blinds)
    );
  }

  private notify() {
    this.currentTurn$.next(this.currentTurn);
  }

  public getCurrentTurn(): Observable<NewTurn> {
    return this.currentTurn$;
  }

  private setCurrentTurn(turn: number, players: NewPlayer[], blinds: NewBlind[]) {
    this.currentTurn = new NewTurn(turn, players, blinds);
    this.notify();
  }

}
