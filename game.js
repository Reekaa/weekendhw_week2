const data = require('./data');
const Card = require('./card');

class Game {

  constructor(players){
    this.players = players;
    this.deck = [];
    this.data = data;
  };
  createDeck(){
    const deck = this.data.map((cardData) => {
      return new Card(cardData.name, cardData.intelligence, cardData.strength, cardData.agility)
    });
      this.deck = deck;
  };

}
module.exports = Game;
