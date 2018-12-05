import $ from 'jquery'

fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
.then(response => response.json())
.then(response => displayTopWord(response))
.catch(error => console.error({ error }));

const displayTopWord = (wordResponse) => {
  const topWord = Object.keys(wordResponse.word)[0];
  const topWordCount = Object.values(wordResponse.word)[0];
  $('.top-word').children("h3").after(`<p>${topWord} occurs ${topWordCount} times!</p>`)
}

$("#break-down").on("click", () => {
  var text = $("#breakdown-text").val();
  var wordArray = text.split(" ");
  wordArray.forEach(function(word) {
    let payload = {
      "word": {
        "value": word
      }
    };
    fetch("https://wordwatch-api.herokuapp.com/api/v1/words", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => console.log(response.json()));
  });
});
