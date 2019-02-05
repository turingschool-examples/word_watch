import $ from 'jquery'

var apiURL = "https://wordwatch-api.herokuapp.com/api/v1"
var wordRequest = new XMLHttpRequest();

$(document).ready(() => {
  getTopWord();
})

function getTopWord() {
  wordRequest.open('GET', apiURL + "/top_word")
    wordRequest.onload = function() {
      var word_data = JSON.parse(wordRequest.responseText)

      appendTopWord(word_data)
    };
    wordRequest.send();
}

function appendTopWord(word_data) {
  var top_word = Object.keys(word_data.word);
  var word_count = word_data.word.top_word
  debugger;
  
}
