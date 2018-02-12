class WordWatchService {
  constructor() {
    this.api_base = 'https://wordwatch-api.herokuapp.com/api/v1/'
  }

  getTopWord() {
    return fetch(this.api_base + 'top_word')
      .then(response => response.json())
  }

  postResults(results) {
    Object.keys(results).forEach((word) => {
      let payload = { word: { value: word } }
      fetch(this.api_base + 'words', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
    })
  }
}

module.exports = new WordWatchService()
