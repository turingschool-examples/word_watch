const $ = require('jquery')

class WordWatchHelper {
  
  addTopWord(response) {
    let word = Object.keys(response.word)[0]
    let value = response.word[word]
    let $topWordHeader = $('article.top-word h3')
    $topWordHeader.text($topWordHeader.text() + `${word} (${value})`)
  }

}

module.exports = new WordWatchHelper()
