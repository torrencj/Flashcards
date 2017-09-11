
//Doesn't work with "new"
// const ClozeCard = (text, answer) => ({
//   text,
//   answer,
//   question:
//   text.slice(0, text.indexOf(answer)) + "..."
//   + text.slice(text.indexOf(answer) + answer.length, text.length),
// })

//Example usage:
// var ClozeCard = require('./clozecard.js');
// var q = "George Washington was the first president of the United States.";
// var a = "George Washington";
// var whee = new ClozeCard(q, a);


//Works only with "new"
var ClozeCard = function(text, answer) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, answer);
  }
  this.full = text;
  this.question = cloze(text, answer);
  this.answer = answer;
  this.print = function() {
    console.log(`Question: ${this.question} \n Answer: ${this.answer} \n Full text: ${this.full} \n----------------`);
  }
}

function cloze(question, answer) {
  var start = question.indexOf(answer)
  if (start != -1) {
    return question.slice(0, start) + "..." + question.slice(start + answer.length, question.length)
  } else {
    console.log("I couldn't find that in the question.");
  }
}



module.exports = ClozeCard
