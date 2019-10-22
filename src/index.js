import $ from 'jquery'
const fetch = require("node-fetch");

$(document).ready(() => {

  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => response.json())
  .then(result => {
    console.log(Object.keys(result.word))
      $(".top-word").append(Object.keys(result.word)[0])
  })

  $(".Hello").click(function() {

    fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
      method: 'post',
      body: JSON.stringify({
        word: { value: "ohhellothere" }
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log('result', result)
      
  })
})
