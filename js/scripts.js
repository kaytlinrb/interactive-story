//Business Logic



//UI
$(document).ready(function(){
  $('button').click(function(){
    var answerOne = $(this).attr('id');
    if (answerOne === 'true-one') {
      $("#mainDiv").hide();
      $("#success-one").show();

    } else {
      $("#riddlequestion1").hide();
      $("#wrong-one").show();
    }
$("#useHerb").click(function(){
  $("#wrong-one").hide();
  $("#mainDiv").show();
});

event.preventDefault();
  });

////RIDDLE ONE/////
$('#riddleAttemptButton1').click(function(){
  $('#chapterOne').hide();
  $('#riddleOne').show();
});
$('#combat1Button').click(function(){
  window.location.href='/Users/Guest/Desktop/interactive-story/combat.html#1021112';
});

$('.riddle1btn').click(function(){
  var answerOne = $(this).attr('id');
  if (answerOne === 'trueButton') {
    window.location.href='win.html';
  } else {
    window.location.href='lose.html';
  }
});
$('.chapter1Reset').click(function(){
  window.location.href='chapter1.html';
});
$('.proceedToChapter2').click(function(){
  window.location.href='../2/chapter2.html';
});

/////RIDDLE TWO/////
$('#riddleAttemptButton2').click(function(){
  $('#chapterTwo').hide();
  $('#riddleTwo').show();
});
$('#combat2Button').click(function(){
  window.location.href='/Users/Guest/Desktop/interactive-story/combat.html#2032223';
});

$('.riddle2btn').click(function(){
  var answerTwo = $(this).attr('id');
  if (answerTwo === 'trueButton') {
    window.location.href='win.html';
  } else {
    window.location.href='lose.html';
  }
});
// Fail retry button
$('.retryButtonChapter2').click(function(){
  window.location.href='chapter2.html';
});
$('.proceedButton3').click(function(){
  window.location.href='../3/chapter3.html';
});

/////RIDDLE THREE/////
$('#riddleAttemptButton3').click(function(){
  $('#chapterThree').hide();
  $('#riddleThree').show();
});

$('.riddle3btn').click(function(){
  var answerThree = $(this).attr('id');
  if (answerThree === 'trueButton') {
    window.location.href='win.html';
  } else {
    window.location.href='lose.html';
  }
});
// Fail retry button
$('.retryButtonChapter3').click(function(){
  window.location.href='chapter3.html';
});
$('.proceedButton4').click(function(){
  window.location.href='../4/chapter4.html';
});

/////PAGE FOUR/////
$('.proceedButton5').click(function(){
  window.location.href='../5/chapter5.html';
});

/////PAGE FIVE/////
$('#riddleAttemptButton4').click(function(){
  $('#chapterFive').hide();
  $('#riddleFive').show();
});
$('#pigdicebtn').click(function(){
  window.location.href='../../pig.html';
});
$('#rpsbtn').click(function(){
  window.location.href='../../rock-paper.html';
});

$('.riddle4btn').click(function(){
  var answerThree = $(this).attr('id');
  if (answerThree === 'trueButton') {
    window.location.href='win.html';
  } else {
    window.location.href='lose.html';
  }
});
// Fail retry button
$('.retryButtonChapter5').click(function(){
  window.location.href='chapter5.html';
});
$('.proceedButton6').click(function(){
  window.location.href='../6/chapter6.html';
});

/////PAGE SIX/////
$('#combatFinal').click(function(){
  window.location.href='/Users/Guest/Desktop/interactive-story/combat.html#3042267';
});

});
