import $ from 'jquery'

$(document).ready(() => {

    fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    .then(response => response.json())
    .then(top_word => displayWord(top_word))
    .catch(error => console.error({ error }))

    const displayWord = (input) => {
      var word = Object.keys(input.word)[0];
      var wordCount = Object.values(input.word)[0];
      return $('.top-word h3').append(`"${word}", ${wordCount} times`);
    }

  $( "#breakdown-button" ).click(function() {
      var input = $('#text-input').val();
        fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
          method: "POST",
          headers: {
             "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ word: { value: input}})
        })
        .then(response => response.json())
        .then(json => {
          fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
          .then(response => response.json())
          .then(top_word => displayWord(top_word))
          .catch(error => console.log({ error }));
        })
        .catch(error => console.log({ error }));
    });

})
