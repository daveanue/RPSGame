var userScore = 0;
var compScore = 0;

const userScore_span = $("#user-score");
const compScore_span = $("#computer-score");

var listOfChoices = ["Rock","Scissor","Paper"];


function win() {
  userScore++;
 $(userScore_span).text(userScore);
 $(compScore_span).text(compScore);


}
function lose() {
  compScore++;
  $(userScore_span).text(userScore);
  $(compScore_span).text(compScore);


}
function draw() {
  $(userScore_span).text(userScore);
  $(compScore_span).text(compScore)

}

//random Computer Choices
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random()*3);
  return listOfChoices[randomNumber];
}

let computerChoice = getComputerChoice();
//function after making a choice.
// why does function letsPlay(playerChoice, computerChoice) not work ?
function letsPlay(playerChoice,computerChoice)  {
  if ((playerChoice === 'Rock' && computerChoice === 'Scissor') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissor' && computerChoice === 'Paper')) {
    $(".result > p").text(playerChoice +" beats " + computerChoice + " you won");

    win();

 }

 else if ((playerChoice === 'Rock' && computerChoice === 'Paper') || (playerChoice === 'Paper' && computerChoice === 'Scissor') || (playerChoice === 'Scissor' && computerChoice === 'Rock')) {
   $(".result > p").text(computerChoice +" beats " + playerChoice + " you lost");
     lose();
 }

 else  {
   $(".result > p").text( "it was a tie");

     draw();
 }

}

let playerChoice;

//click on button eventListener

$("#rock").click(function() {
  letsPlay('Rock', getComputerChoice());
})

$("#scissor").click(function() {
  letsPlay('Scissor', getComputerChoice());
})
$("#paper").click(function() {
  letsPlay('Paper', getComputerChoice());
})
