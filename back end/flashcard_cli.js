var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard')

var prompt = [
  {
    type: "input",
    name: "fulltext",
    message: "Enter the full text of your card."
  },
  {
    type: "input",
    name: "cloze",
    message: "Now enter the 'answer' to your card."
  },
  {
    type: "confirm",
    name: "more",
    message: "Want more?"
  }
]
  var allCards = [];

function getInput(cardlist) {
  inquirer.prompt(prompt).then(response =>{
    cardlist.push(new ClozeCard(response.fulltext, response.cloze));
    if (response.more) {
      getInput(allCards);
    } else {
      showAll(cardlist)
    }
  });
}

function showAll(cards) {
  cards.map(elem => {elem.print()});
}

getInput(allCards);
