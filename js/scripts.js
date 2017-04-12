//Business Logic



//UI
$(document).ready(function(){
<<<<<<< HEAD
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

=======
  ////CHAPTER ONE/////

$('#riddleAttemptButton1').click(function(){
  $('#chapterOne').hide();
  $('#riddleOne').show();
});

/////RIDDLE ONE/////

  $('.riddle1btn').click(function(){
    var answerOne = $(this).attr('id');
    if (answerOne === 'trueButton') {
      $('#riddleOne').hide();
      $('#riddleOneSuccess').show();

    } else {
      $('#riddleOne').hide();
      $('#riddleOneFail').show();
    }
  });


$('.proceedButton2').click(function(){
  $('#riddleOneFail').hide();
  $('#chapterOne').show();
});


/////RIDDLE TWO/////

$('#riddleAttemptButton2').click(function(){
  $('#chapterTwo').hide();
  $('#riddleTwo').show();
});

$('.riddle2btn').click(function(){
  var answerTwo = $(this).attr('id');
  if (answerTwo === 'trueButton') {
    $('#riddleTwo').hide();
    $('#riddleTwoSuccess').show();

  } else {
    $('#riddleTwo').hide();
    $('#riddleTwoFail').show();
  }
});
// Fail retry button
$('.retryButtonChapter2').click(function(){
  $('#riddleTwoFail').hide();
  $('#riddleTwo').show();
});

/////RIDDLE THREE/////


$('#riddleAttemptButton3').click(function(){
  $('#chapterThree').hide();
  $('#riddleThree').show();
});

$('.riddle3btn').click(function(){
  var answerThree = $(this).attr('id');
  if (answerThree === 'trueButton') {
    $('#riddleThree').hide();
    $('#riddleThreeSuccess').show();

  } else {
    $('#riddleThree').hide();
    $('#riddleThreeFail').show();
  }
});
// Fail retry button
$('.retryButtonChapter3').click(function(){
  $('#riddleThreeFail').hide();
  $('#riddleThree').show();
});

/////RIDDLE TWO/////

$('#riddleAttemptButton4').click(function(){
  $('#chapterFour').hide();
  $('#riddleFour').show();
});

$('.riddle4btn').click(function(){
  var answerTwo = $(this).attr('id');
  if (answerTwo === 'trueButton') {
    $('#riddleFour').hide();
    $('#riddleFourSuccess').show();

  } else {
    $('#riddleFour').hide();
    $('#riddleFourFail').show();
  }
});
// Fail retry button
$('.retryButtonChapter4').click(function(){
  $('#riddleFourFail').hide();
  $('#riddleFour').show();
});
>>>>>>> a14fdf6bf6e8175195756241c87120c9d7da317e
});
