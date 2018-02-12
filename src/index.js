import $ from 'jquery'
const WordWatch = require('./components/word_watch')

$(document).ready(() => {
  WordWatch.topWord()
  let $textSubmission = $('section.text-submission button')

  $textSubmission.on('click', (event) => {
    event.preventDefault()
    WordWatch.breakDown()
  })

  $textSubmission.on('keydown', (event) => {
    event.preventDefault()
    if (event.char == 'Enter') {
      WordWatch.breakdown()
    }
  })
})
