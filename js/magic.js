// https://en.wikipedia.org/wiki/Magic_8-Ball

var answers = ['Yes','No', 'Maybe', 'IDK', 'Can you repeat<br>the<br>question<br>?'];

function askQuestion() {
  console.log('abracadabra');
  var rando = Math.floor(Math.random()*5)
  console.log(rando);
  console.log(answers[rando]);
  var answerPara = document.getElementById('the-answer');
  answerPara.innerHTML = answers[rando];
}

function reset() {
  console.log('reset');
  document.getElementById('the-answer').innerHTML = 'Try Me';
}
