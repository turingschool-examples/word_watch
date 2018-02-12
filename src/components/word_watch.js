const WordWatchService = require('../services/word_watch_service')
const WordWatchHelper = require('../helpers/word_watch_helper')

class WordWatch {

  topWord() {
    WordWatchService.getTopWord()
      .then(response => {
        WordWatchHelper.addTopWord(response)
      })
  }
}

module.exports = new WordWatch()
