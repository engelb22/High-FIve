var cardSet = ["ace-club", "ace-diamond", "ace-heart", "ace-spade", "two-club", "two-diamond", "two-heart", "two-spade", "three-club", "three-diamond", "three-heart", "three-spade", "four-club", "four-diamond", "four-heart", "four-spade", "five-club", "five-diamond", "five-heart", "five-spade", "six-club", "six-diamond", "six-heart", "six-spade", "seven-club", "seven-diamond", "seven-heart", "seven-spade", "eight-club", "eight-diamond", "eight-heart", "eight-spade", "nine-club", "nine-diamond", "nine-heart", "nine-spade", "ten-club", "ten-diamond", "ten-heart", "ten-spade", "jack-club", "jack-diamond", "jack-heart", "jack-spade", "queen-club", "queen-diamond", "queen-heart", "queen-spade", "king-club", "king-diamond", "king-heart", "king-spade"];
var userCards = [];
var showCards = false;

$(".show-cards").click(function() {
  if (showCards === false) {
    chosenCardSet();
    $(".show-cards").text("Reset Cards");
    showCards = true;   
  } else {
    $(".playing-card").attr("src", "../assets/images/CardBack.jpg");
    $(".show-cards").text("Show Cards");
    userCards = [];
    showCards = false;
  }
});

function pickCards() {
  var x = Math.floor(Math.random()*52);
  var chosenCard = cardSet[x];
  while (userCards.includes(chosenCard) === true) {
    x = Math.floor(Math.random()*52);
    chosenCard = cardSet[x];
  }
  userCards.push(chosenCard);
}

function chosenCardSet() {
  playerSetOfCards();
  playerSetOfCards();
  playerSetOfCards();
  playerSetOfCards();
  $(".card11").attr("src", "../assets/images/PlayingCards/" + userCards[0] + ".png");
  $(".card12").attr("src", "../assets/images/PlayingCards/" + userCards[1] + ".png");
  $(".card13").attr("src", "../assets/images/PlayingCards/" + userCards[2] + ".png");
  $(".card14").attr("src", "../assets/images/PlayingCards/" + userCards[3] + ".png");
  $(".card15").attr("src", "../assets/images/PlayingCards/" + userCards[4] + ".png");
  $(".card21").attr("src", "../assets/images/PlayingCards/" + userCards[5] + ".png");
  $(".card22").attr("src", "../assets/images/PlayingCards/" + userCards[6] + ".png");
  $(".card23").attr("src", "../assets/images/PlayingCards/" + userCards[7] + ".png");
  $(".card24").attr("src", "../assets/images/PlayingCards/" + userCards[8] + ".png");
  $(".card25").attr("src", "../assets/images/PlayingCards/" + userCards[9] + ".png");
  $(".card31").attr("src", "../assets/images/PlayingCards/" + userCards[10] + ".png");
  $(".card32").attr("src", "../assets/images/PlayingCards/" + userCards[11] + ".png");
  $(".card33").attr("src", "../assets/images/PlayingCards/" + userCards[12] + ".png");
  $(".card34").attr("src", "../assets/images/PlayingCards/" + userCards[13] + ".png");
  $(".card35").attr("src", "../assets/images/PlayingCards/" + userCards[14] + ".png");
  $(".card41").attr("src", "../assets/images/PlayingCards/" + userCards[15] + ".png");
  $(".card42").attr("src", "../assets/images/PlayingCards/" + userCards[16] + ".png");
  $(".card43").attr("src", "../assets/images/PlayingCards/" + userCards[17] + ".png");
  $(".card44").attr("src", "../assets/images/PlayingCards/" + userCards[18] + ".png");
  $(".card45").attr("src", "../assets/images/PlayingCards/" + userCards[19] + ".png");
  console.log(userCards);
}

function playerSetOfCards() {
  pickCards();
  pickCards();
  pickCards();
  pickCards();
  pickCards();
}