import $ from 'jquery'

$(document).ready(() => {

    fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    .then(response => response.json())
    .then(top_word => displayWord(top_word))
    .catch((error) => console.error({ error }))

})
