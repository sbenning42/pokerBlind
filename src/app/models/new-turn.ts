import { NewPlayer } from './new-player';
import { NewBlind } from './new-blind';

export class NewTurn {

    public dealer: NewPlayer;
    public littleBlind: NewPlayer;
    public bigBlind: NewPlayer;
    public blind: NewBlind;
    public nextBlind: NewBlind;
    public nextBlindIn: number;

    constructor(
        public turn: number,
        public players: NewPlayer[],
        blinds: NewBlind[]
    ) {

        this.dealer = this.players[(this.turn) % this.players.length];
        this.littleBlind = this.players[(this.turn + 1) % this.players.length];
        this.bigBlind = this.players[(this.turn + 2) % this.players.length];

        let total = 0;
        let index = blinds.findIndex((blind: NewBlind) => {const res = (total += blind.duration) > this.turn; return res; });
        if (index < 0) { index = 0; }

        this.blind = blinds[index];
        this.nextBlindIn = total - (this.turn + 1);
        this.nextBlind = blinds[(index + 1) % blinds.length];
    }
}
