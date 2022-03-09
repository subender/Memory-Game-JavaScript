//Array of Cards
const cards = [
  {
    name: "bear",
    img: "img/bear.jpg",
  },

  {
    name: "dog",
    img: "img/dog.jpg",
  },

  {
    name: "frog",
    img: "img/frog.jpg",
  },

  {
    name: "monkey",
    img: "img/monkey.jpg",
  },

  {
    name: "panda",
    img: "img/panda.jpg",
  },

  {
    name: "tiger",
    img: "img/tiger.jpg",
  },

  {
    name: "bear",
    img: "img/bear.jpg",
  },

  {
    name: "dog",
    img: "img/dog.jpg",
  },

  {
    name: "frog",
    img: "img/frog.jpg",
  },

  {
    name: "monkey",
    img: "img/monkey.jpg",
  },

  {
    name: "panda",
    img: "img/panda.jpg",
  },

  {
    name: "tiger",
    img: "img/tiger.jpg",
  },
];

//Shuffle Cards array
cards.sort(() => 0.5 - Math.random());

// Elements selectoins and variables
const gird = document.querySelector(".grid");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
let choices = [];
let choicesId = [];
let won = [];

// functions

createBoard();

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/background-yellow-waves.jpg");
    card.addEventListener("click", flipCard);
    card.setAttribute("data-id", i);
    card.classList.add("img");
    gird.appendChild(card);
  }
}

function flipCard() {
  const cardId = this.dataset.id; // gets the value of clicked card
  choices.push(cards[cardId].name);
  choicesId.push(cardId);
  console.log(choices, choicesId);
  this.setAttribute("src", cards[cardId].img);

  if (choices.length == 2) {
    setTimeout(checkResult, 400);
  }
}

function checkResult() {
  const allCards = document.querySelectorAll(".img");
  cardOneId = choicesId[0];
  cardTwoId = choicesId[1];

  // if card matches --->
  if (choices[0] === choices[1] && cardOneId !== cardTwoId) {
    allCards[cardOneId].style.opacity = "0";
    allCards[cardTwoId].style.opacity = "0";
    allCards[cardTwoId].removeEventListener("click", flipCard);
    allCards[cardOneId].removeEventListener("click", flipCard);
    won.push(choices);
  } else {
    allCards[cardOneId].setAttribute("src", "img/background-yellow-waves.jpg");
    allCards[cardTwoId].setAttribute("src", "img/background-yellow-waves.jpg");
  }

  score.innerText = won.length;
  choices = [];
  choicesId = [];

  if (won.length === cards.length / 2) {
    result.innerText = "Congrats. you Won !!";
  }
}
