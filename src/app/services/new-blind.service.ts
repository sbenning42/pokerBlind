import { Injectable } from '@angular/core';

import { NewBlind } from './../models/new-blind';

const withDefault = true;

class DefaultBlindsCopy {
  defaultBlinds: NewBlind[] = [];
  constructor(defaultBlindsToCopy: NewBlind[]) {
    defaultBlindsToCopy.forEach((defaultBlind: NewBlind) => this.defaultBlinds
      .push(new NewBlind(defaultBlind.bet, defaultBlind.duration)));
  }
}

const defaultBlinds: NewBlind[] = [
  new NewBlind(5, 6),
  new NewBlind(10, 6),
  new NewBlind(15, 6),
  new NewBlind(25, 6),
  new NewBlind(50, +Infinity),
];



@Injectable()
export class NewBlindService {

  private _blinds: NewBlind[];
  public get blinds(): NewBlind[] { return this._blinds; }

  constructor() {
    this.reNew();
  }

  addBlind(blind: NewBlind): NewBlind[] {
    const newBlind = new NewBlind(+blind.bet, +blind.duration);
    this._blinds.push(newBlind);
    return this.blinds;
  }

  saveBlind(blind: NewBlind, i: number): NewBlind[] {
    const newBlind = new NewBlind(+blind.bet, +blind.duration);
    this._blinds[i % this._blinds.length] = newBlind;
    return this.blinds;
  }

  deleteBlind(blindToDelete: NewBlind, i: number): NewBlind[] {
    this._blinds = this.blinds.filter((blind: NewBlind) => blind === blindToDelete);
    return this.blinds;
  }

  reNew() {
    this._blinds = withDefault ? (new DefaultBlindsCopy(defaultBlinds)).defaultBlinds : [];
  }

}
