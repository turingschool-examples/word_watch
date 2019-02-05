import $ from 'jquery'

const productionUrl = 'https://wordwatch-api.herokuapp.com';
const getWord = '/api/v1/top_word';
const postWord = '/api/v1/words';

$(document).ready(() => {
  getTopWord()
})

const getTopWord = () => {
  let url = `${productionUrl}` + `${getWord}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // debugger
    displayTopWord(data)
  })
  .catch(error => {
    console.log(error)
  });
};


const displayTopWord = (data) => {
  $("#top-word").html('')
  $('#top-word').append(`
    <h2> ${Object.keys(data.word)} </h2>
  `)
  $("#top-word-score").html('')
  $('#top-word-score').append(`
    <h2> ${Object.values(data.word)} </h2>
  `)
}