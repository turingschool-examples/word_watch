import $ from 'jquery'

$(document).ready(() => {

    fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    .then(response => response.json())
    .then(top_word => displayWord(top_word))
    .catch((error) => console.error({ error }))

    const displayWord = (input) => {
      var word = Object.keys(input.word)[0];
      var wordCount = Object.values(input.word)[0];
      return $('.top-word h3').append(`"${word}", ${wordCount} times`);
    }
    
})
