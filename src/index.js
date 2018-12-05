import $ from 'jquery'

$(document).ready(() => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    .then(response => response.json())
    .then(word => displayWord(word))
    .catch(error => console.log({ error }));

  const displayWord = (word) => {
    const topWord = Object.keys(word.word)[0];
    const topWordCount = Object.values(word.word)[0];
    $('.top-word h3').html("Top word from Word Watch API: ");

    $('.top-word h3').append(`"${topWord}" = ${topWordCount} times`);

  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  $( "#breakdown" ).click(function() {
    var contents = $('#input').val();
      fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
        method: "POST",
        headers: {
           "Content-Type": "application/json; charset=utf-8",
           // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ word: { value: contents}})
      })
      .then(response => response.json())
        .then(json => {fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
          .then(response => response.json())
          .then(word => displayWord(word))
          .then(async () => {
            $('#user-message').html('Message succesfully posted!');
            await sleep(2000);
            $('#user-message').html('');
          })
          .catch(error => console.log({ error }));
        })
      .catch(error => console.log({ error }));
  });
})
