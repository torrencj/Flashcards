//Uses jquery and Materialize

var inputForm = document.querySelector('#flash-card-input');

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function flipCard() {
  document.querySelector(".flip-container").classList.toggle("flip")
}

function cloze(question, answer) {
  var start = question.indexOf(answer)
  if (start != -1) {
    return question.slice(0, start) + "..." + question.slice(start + answer.length, question.length)
  } else {
    console.log("I couldn't find that in the question.");
  }
}

$("#flash-card-input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#flash-card-input").submit();
    }
});

inputForm.onsubmit = function(event) {
  event.preventDefault();
  console.log(event);
}
