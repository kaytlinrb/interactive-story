//Business Logic

var humanChoice;
var aiTotalWin = 0;
var playerTotalWin = 0;

function turn(humanChoice) {
  var randomAI =  Math.floor((Math.random()* 3) +1);
  var aiChoice;
  if (randomAI === 1) {
      aiChoice = "skull";
      $('#ai').show();
      $('#ai1').append('<li>' + aiChoice + '</li>');
    } else if (randomAI === 2) {
      aiChoice = "parchment";
      $('#ai').show();
      $('#ai1').append('<li>' + aiChoice + '</li>');
    } else {
      aiChoice = "knife";
      $('#ai').show();
      $('#ai1').append('<li>' + aiChoice + '</li>');
    }

    console.log(aiChoice, humanChoice)
  if (humanChoice === aiChoice) {
    $('#player').show();
    $('#player1').append('<li>' + humanChoice + '</li>');
  } else if (humanChoice === 'skull' && aiChoice === 'parchment') {
    $('#player').show();
    $('#player1').append('<li>' + humanChoice + '</li>');
    aiTotalWin += 1;
    if (aiTotalWin >= 4) {
      $("#main").hide();
      $('#ai-won').show();
    }

  } else if (humanChoice === 'parchment' && aiChoice === 'knife') {
    $('#player').show();
    $('#player1').append('<li>' + humanChoice + '</li>');
    aiTotalWin += 1;
    if (aiTotalWin >= 4) {
      $("#main").hide();
      $('#ai-won').show();
    }
  }
  else if (humanChoice === 'knife' && aiChoice === 'skull') {
  $('#player').show();
  $('#player1').append('<li>' + humanChoice + '</li>');
    aiTotalWin += 1;
    if (aiTotalWin >= 4) {
      $("#main").hide();
      $('#ai-won').show();
    }
 } else {
    $('#player').show();
    $('#player1').append('<li>' + humanChoice + '</li>');
    playerTotalWin += 1;
    if (playerTotalWin >= 2) {
      $('#player-won').show();
      $("#main").hide();
    }
  }
}


//UI
$(document).ready(function(){
  $('.btn').click(function(){
  var humanChoice = $(this).attr('id');
  turn(humanChoice);
 });
 $('#rpsWin').click(function(){
   window.location.href='chapters/5/win.html';
 });
 $('#rpsLose').click(function(){
   window.location.href='chapters/5/lose.html';
 });
});
