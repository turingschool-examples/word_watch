import $ from 'jquery'
const WordWatch = require('./components/word_watch')

$(document).ready(() => {
  WordWatch.topWord()
  $('section.text-submission button').on('click', (event) => {
    event.preventDefault()
    WordWatch.breakDown()
  })
})
