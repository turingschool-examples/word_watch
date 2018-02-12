const WordWatchService = require('../services/word_watch_service')
const WordWatchHelper = require('../helpers/word_watch_helper')

class WordWatch {

  topWord() {
    WordWatchService.getTopWord()
      .then(response => {
        WordWatchHelper.addTopWord(response)
      })
  }

  breakDown() {
    let text = WordWatchHelper.getSubmissionText()
    let results = {}
    text.split(' ').forEach((word) => {
      results[word] = results[word] + 1 || 1 
    })
    WordWatchHelper.addSubmissionResults(results)
    WordWatchService.postResults(results)
  }
}

module.exports = new WordWatch()
