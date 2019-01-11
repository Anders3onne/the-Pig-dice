function Player(playerID) {
    this.score = 0;
    this.runningTotal = 0;
    this.turn = 0;
    this.playerID = playerID;
}

function Referee() {
    this.players = [];
    this.winner = "";
    this.gameover = 0;
    this.dice = 0;
}
Referee.prototype.switchPlayer = function () {
    if (this.players[0].turn === 1) {
        this.players[0].turn = 0;
        this.players[1].turn = 1;

    } else if (this.players[1].turn === 1) {
        this.players[0].turn = 1;
        this.players[1].turn = 0;
    }

}