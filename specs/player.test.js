const Card = require(`../card`);
const Game = require(`../game`);
const Player = require(`../player`);

describe('player', () => {

  let player1;
  let player2;
  let card1;
  let scarletWitch;
  let blackWidow;
  let theFlash;
  let wonderWoman;
  let batman;

beforeEach( () => {

  player1 = new Player("Reka", []);
  player2 = new Player("Vera", []);
  players = [player1, player2];

  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
  card3 = new Card('Black Widow', 8, 6, 9);
  card4 = new Card('The Flash', 7, 4, 10);
  card5 = new Card('Wonder Woman', 8, 7, 5);
  card6 = new Card('Batman', 10, 5, 6);
  cards = [card1, card2, card3, card4, card5, card6];

  gameX = new Game(players, cards);

});

test('card should have an name', function () {
  expect(card1.intelligence).toBe(6);
  });

test('card should have an intelligence', function () {
  expect(card1.intelligence).toBe(6);
  });

test('card should have a strength', function () {
  expect(card1.strength).toBe(9);
  });

test('card should have an agility', function () {
  expect(card1.agility).toBe(7);
  });

test('should be able to count the cards in hand', function () {
  player1.addCardToHand(card3);
  player1.addCardToHand(card5);
  expect(player1.countCards()).toBe(2);
  });

test('player should have a name', function () {
  expect(player1.name).toBe("Reka");
  });

test('player should start with empty hands', function () {
  expect(player1.hand).toEqual([]);
  });

test('player should be able to select the category they want to play', function () {
  player1.pickCategory('agility');
  player2.pickCategory('intelligence');
  expect(player1.newCategory).toBe('agility');
  expect(player2.newCategory).toBe('intelligence')
  });

test('player should be able to have cards', function () {
  player1.addCardToHand(card3);
  player1.addCardToHand(card5);
  expect(player1.hand).toEqual([card3, card5]);
  });

test('player should be able play a card', function () {
  player1.addCardToHand(card3);
  player1.playCard();
  expect(player1.newCard).toEqual(card3);
  });

test('game should have two players', function () {
  expect(gameX.players.length).toBe(2)
  });

test('game should have a deck', function () {
  expect(gameX.deck).toBe(cards);
  });

test('game should be able to deal cards to players', function () {
  gameX.dealCards();
  expect(gameX.player1.length).toBe(3);
  expect(gameX.player2.length).toBe(3);
  });

test('player should be able to play the top card', function () {
  gameX.dealCards();
  let player1card = gameX.playTopCardFirstPlayer(card1);
  let player2card = gameX.playTopCardSecondPlayer(card2);
  expect(gameX.player1.length).toBe(2);
  expect(gameX.player2.length).toBe(2);
});



// test('player should be able to play all cards', function () {
//   gameX.playAllCards();
//   expect(player1.newCard).toBe([]);
//   expect(player2.newCard).toBe([]);
//   });

test('game should be able to calculate the winner of the turn', function () {
  gameX.dealCards();
  let player1card = gameX.playTopCardFirstPlayer(card1);
  let player2card = gameX.playTopCardSecondPlayer(card2);
  console.log(gameX.player1);
  gameX.player1.pickCategory('intelligence');

  expect(gameX.getWinnerOfTurn(player1card, player2card)).toEqual(player2);
  });
//
// xtest('if result is draw, the player who made the category selection wins', function () {
//   expect().toBe();
//   });
//
// xtest('when one player has all the cards, wins the game', function () {
//   gameX.getWinnerOfTheGame();
//   expect(gameX.winner).toBe(player1);
//   });
});
