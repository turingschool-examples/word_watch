import $ from 'jquery'

function getTopWord(){
  $.ajax({
    type: "GET",
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    success: function(word){
      var top_word = Object.keys(word.word)[0]
      $(".word-count").html(`<h3>${top_word}</h3> <br> <h3>${word.word[top_word]}</h3>`)}

  })
}

$(document).ready(() => {
  getTopWord()
})
