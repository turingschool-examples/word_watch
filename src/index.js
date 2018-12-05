import $ from 'jquery'

$(document).ready(() => {

fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => response.json())
  .then(word => displayWord(word))
  .catch(error => console.log({ error }));

const displayWord = (word) => {
  const topWord = Object.keys(word.word)[0];
  const topWordCount = Object.values(word.word)[0];
  $('.top-word h3').append(`"${topWord}"`);
  $('.word-count').append(topWordCount);
}

const sendWords = () => {
  const words = $('.text-submission textarea').val();
  words.split(" ").forEach(word => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      word: { value: word }
    })
  })
   .then(response => response.json())
   .then(message => displayMessage(message))
   .catch(error => console.log({ error }));
});
};

const displayMessage = (message) => {
  const parsedMessage = Object.values(message);
  $('.text-submission textarea').val('');
  $('.word-count').append(`<p>${parsedMessage}</p>`);
};

$('.text-submission button').on('click', sendWords);
})
