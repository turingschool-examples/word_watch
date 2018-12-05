import $ from 'jquery'
// import pry from 'pryjs'

$(document).ready(() => {

fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => response.json())
  .then(word => displayWord(word))
  .catch(error => console.log({ error }));

const displayWord = (word) => {
  const topWord = Object.keys(word.word)[0];
  const topWordCount = Object.values(word.word)[0];
  $('.top-word h3').append(`"${topWord}" = ${topWordCount} times`);
}

})
