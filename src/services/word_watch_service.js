class WordWatchService {
  constructor() {
    this.api_base = 'https://wordwatch-api.herokuapp.com/api/v1/'
  }

  getTopWord() {
    return fetch(this.api_base + 'top_word')
      .then(response => response.json())
  }
}

module.exports = new WordWatchService()
