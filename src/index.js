import $ from 'jquery'

function getTopWord(){
  $.ajax({
    type: "GET",
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    success: function(word){
      var top_word = Object.keys(word.word)[0]
      $(".word-count").html(`<h3>${top_word}<br>count:${word.word[top_word]}</h3>`)}
  })
}

function splitWords(){
  var text_to_post = document.getElementById("text-to-post").value;
  var array_of_words = text_to_post.split(" ")

  array_of_words.forEach(word =>{
    postWords(word)
  })
}

function postWords(word_to_post){
  var word_to_post = word_to_post
  var url = "https://wordwatch-api.herokuapp.com/api/v1/words";
  var payload = {
      "word": {
        "value": `${word_to_post}`,
      }
    };

  fetch(url, {
    method: 'POST',
    headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .catch(error => console.error(error))
}


$(document).ready(() => {
  getTopWord()

  $( "#break-down" ).on("click", function(){
    splitWords();
  })
})
