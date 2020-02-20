import $ from 'jquery'
var fetch = require('node-fetch')

$(document).ready(() => {
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
  .then(response => response.json())
  .then(result => {
    var topWord = result.word
    var final = JSON.stringify(topWord)
    return document.querySelector('.word-count').innerHTML = final;
  });
})

$(document).ready(() => {
  var targetElement = document.querySelector('.submit')
  targetElement.addEventListener("click", function() {
    var input = document.getElementsByClassName('input')[0].value
    var words = input.split(" ")

    words.forEach(element => {
      console.log(element)
      var wordToSend = { "word": { "values": `${element}` }}
      fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(wordToSend)
      })
      .then(function(response) {
        console.log(response)
      })
    })
  })
})
