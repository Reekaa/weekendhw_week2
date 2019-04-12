const Card = require(`../card`);
const Game = require(`../game`);
const Player = require(`../player`);

describe('player', () => {

  let player1;
  let player2;
  let superman;
  let scarletWitch;
  let blackWidow;
  let theFlash;
  let wonderWoman;
  let batman;

beforeEach( () => {

  player1 = new Player("Reka");
  player2 = new Player("Vera");

  superman = new Card('Superman', 6, 9, 7);
  scarletWitch = new Card('Scarlet Witch', 7, 10, 5);
  blackWidow = new Card('Black Widow', 8, 6, 9);
  theFlash = new Card('The Flash', 7, 4, 10);
  wonderWoman = new Card('Wonder Woman', 8, 7, 5);
  batman = new Card('Batman', 10, 5, 6);
  cards = [superman, scarletWitch, blackWidow, theFlash, wonderWoman, batman];
  players = [player1, player2];
  gameX = new Game(players)


});

test('player should have a name', function () {
    expect(player1.name).toBe("Reka");
  });

test('game should have two players', function () {
    expect(gameX.players.length).toBe(2)
  });

test('deck should have cards', function () {
    gameX.createDeck();
    expect(gameX.deck.length).toEqual(6)
    });

xtest('game should be able to deal cards to players', function () {
  expect(player1.name).toBe("Reka");
  });

xtest('player should be able to play the top card', function () {
  expect(player1.name).toBe("Reka");
  });

xtest('player should be able to select the catergory they want to play', function () {
  expect(player1.name).toBe("Reka");
  });

xtest('game should be able to calculate the winner of the turn', function () {
  expect(player1.name).toBe("Reka");
  });

xtest('if result is draw, the player who made the category selection wins', function () {
  expect(player1.name).toBe("Reka");
  });

xtest('player who wins choose the next category in the next turn', function () {
  expect(player1.name).toBe("Reka");
  });

xtest('when one player has all the cards, she wins', function () {
  expect(player1.name).toBe("Reka");
  });









});
