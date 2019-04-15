class Player {

  constructor(name, category) {
    this.name = name;
    this.hand = [];
    this.newCategory = category;
    this.newCard = [];
  };

  countCards(){
    return this.hand.length;
  };

  addCardToHand(card){
    this.hand.push(card);
  };

  playCard(){
    this.newCard = this.hand.pop();
  }

  pickCategory(category){
    this.newCategory = category;
  };

}

module.exports = Player;
