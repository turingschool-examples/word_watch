import $ from 'jquery'

var apiURL = "https://wordwatch-api.herokuapp.com/api/v1"
var wordRequest = new XMLHttpRequest();

$(document).ready(() => {
  getTopWord();
  var breakDown = document.getElementsByClassName("break-down-button")

  breakDown[0].addEventListener("click", function(){
    postText()
  });
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
  var word_count = word_data.word[top_word]
  $("#top-word").append(`🎉${top_word}🎉 Frequency of use: ${word_count}`)
}

function postText() {
  var text = $("#text-field").val()
  var text_array = text.split(" ");

  for(var i=0; i<text_array.length; i++){
    var body = {word: { value: text_array[i] } };

    var successful = 0;

    $.ajax({
      type:"POST",
      url: apiURL + "/words",
      data: body,
      success: successful +=1,
      dataType: "application/json"
    })
  }
  location.reload();

  if(successful >= 1) {
    alert("You word(s) have been posted!")
  } else {
    alert("You post was unsuccessful!")
  }
}
