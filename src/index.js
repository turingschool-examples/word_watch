import $ from 'jquery'

var startingTopWord = "";
var endingTopWord = "";

const fetchTopWord = () => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
.then(response => response.json())
.then(response => displayTopWord(response))
.catch(error => console.error({ error }));
}

const displayTopWord = (wordResponse) => {
  if (startingTopWord === "") {
  startingTopWord = Object.keys(wordResponse.word)[0];
}
endingTopWord = Object.keys(wordResponse.word)[0];
const topWordCount = Object.values(wordResponse.word)[0];
  $('.top-word').children("h3").text("")
  $('.top-word').children("h3").after(`<p>${endingTopWord} occurs ${topWordCount} times!</p>`)
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
    .then(response => console.log(response.json()))
    .then(fetchTopWord);
  });
  if ( endingTopWord === startingTopWord ) {
    $("#user-notify").html("<h3>Thanks for submitting! Your word is not yet the top word. Keep trying!</h3>")
  } else {
    $("#user-notify").html("<h3>CONGRATULATIONS! Your word is now the TOP WORD!</h3>")
  };
});

fetchTopWord();
