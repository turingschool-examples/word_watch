import $ from 'jquery'

$(document).ready(() => {
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
  .then(response => response.json())
  .then(result => {
    var topWord = result.word
    var final = JSON.stringify(topWord)
    return document.querySelector('.word-count').innerHTML = final;
  });
})
