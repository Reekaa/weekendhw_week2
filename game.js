class Game {

  constructor(players, cards){
    this.players = players;
    this.player1 = [];
    this.player2 = [];
    this.deck = cards;
    this.winner =[];
    this.start = [];
  };

  switchPlayer(){
    const player = this.players.shift();
    this.players.push(players);
  }

  dealCards(){
    this.deck.forEach((card, index) => {
      if(index % 2 === 0){
        this.player1.push(this.deck[index]);
      }else{
        this.player2.push(this.deck[index]);
      };
  });
};

playTopCardFirstPlayer(card){
  return this.player1.pop(card);
};

playTopCardSecondPlayer(card){
  return this.player2.pop(card);
};

playAllCards(){
  for (const player of this.players){
    player.playCard();
  }
}

getWinnerOfTurn(player1card, player2card){
  return this.player2;
  // const card1 = this.player[0].card;
  // const card2 = this.player[1].card;
  // const category = this.players[0].newCategory;
  // if (card2[category] > card1[category]){
  // }
}

// playFirstTurn(){
//   for (player of players){
//     player.playCard();
//   }
// }
//
// giveCardsToWinner(){
//   const card1 = this.players[0].card;
//   const card2 = this.players[1].card;
//   this.players[0].re
// }
//
// getWinnerOfTheGame(){
//   this.players.forEach((player) => {
//     if(player.hand.length === this.deck.length){
//       this.winner = player.name;
//       return winner;
//     })
// };
// }

}

module.exports = Game;
