export class NewBlind {
    public little: number;
    public big: number;

    constructor(
        public bet: number,
        public duration: number,
    ) {
        this.little = this.bet;
        this.big = this.bet * 2;
    }
}
