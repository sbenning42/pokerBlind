import { NewPlayer } from './new-player';
import { NewBlind } from './new-blind';

export class GameContext {

    players: NewPlayer[] = [];
    blinds: NewBlind[] = [];

    constructor(
        public turn: number = 0,
        players: NewPlayer[] = [],
        blinds: NewBlind[] = [],
    ) {
        players.forEach((player: NewPlayer) => this.players.push(new NewPlayer(player.name)));
        blinds.forEach((blind: NewBlind) => this.blinds.push(new NewBlind(blind.bet, blind.duration)));
    }
}
