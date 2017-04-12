$(document).ready(function(){
  var turnTotal = 0;
  var activeTotal = 0;
  var inactiveTotal = 0;
  //coin flip to determine first player
  var activePlayer = "";
  function coinFlip(){
    var flip = 2;
    // var flip = Math.ceil(Math.random() * 2);
    if (flip===1){
      activePlayer='player1';
    }
    else if(flip===2&&cpuPlayer===true){
      activePlayer='player2'
      hit();
    }
    else{
      activePlayer='player2'
      alert(activePlayer+' is first');
    }
    $('#'+activePlayer+'-title').addClass('activePlayer');
  }
  //determines if player 2 is a human or cpu
  var cpuPlayer = true;
  coinFlip();

  //resets the game on win or reset button
  function reset(){
    turnTotal = 0;
    activeTotal = 0;
    inactiveTotal = 0;
    activePlayer = "";
    $('#player1-history').empty();
    $('#player2-history').empty();
    $('#player1-total').empty();
    $('#player2-total').empty();
  }
  //simulates d6 roll
  function diceRoll() {
    return Math.ceil(Math.random() * 6);
  }

  //script for players taking turns
  function swap(){
    //switch player totals
    var third = activeTotal;
    activeTotal = inactiveTotal;
    inactiveTotal = third;
    $('#'+activePlayer+'-title').removeClass('activePlayer');
    //switch active player
    if(activePlayer==='player1'&&cpuPlayer===true){
      activePlayer = 'player2';
      hit();
    }
    else if(activePlayer==='player1'){
      activePlayer = 'player2';
    }
    else{
      activePlayer = 'player1';
    }
    $('#'+activePlayer+'-title').addClass('activePlayer');
  }

  function hit(){
    var roll = diceRoll();
    var riskFactor = 20;

    if(inactiveTotal-activeTotal>20){
      riskFactor = 25;}
    else if(activeTotal-inactiveTotal>20){
      riskFactor = 10;
    }

    //expected value is good, hit
    if(roll!=1){
      turnTotal += roll;
            console.log(activePlayer, cpuPlayer, turnTotal, riskFactor);
      $('#'+activePlayer+'-history').append('<li>'+roll+'</li>');
      if(activePlayer==='player2'&&cpuPlayer===true&&(turnTotal+activeTotal)>=50){
        hold();
      }
      else if(activePlayer==='player2'&&cpuPlayer===true&&turnTotal<riskFactor){
        setTimeout(function(){hit();},750);
      }
      else if(activePlayer==='player2'&&cpuPlayer===true){
        hold();
      }
    }
    //bust
    else{
      turnTotal = 0;
      $('#'+activePlayer+'-history').append('<li>bust</li>');
      $('#'+activePlayer+'-total').text(activeTotal);
      swap();
    }
  }
  function hold(){
    activeTotal += turnTotal
    if(activeTotal>=50){
      $('.btn').hide();
      if(activePlayer==='player1'){
        $('#proceedWin').show();
      }
      else{
        $('#proceedLose').show();
      }
      $('#'+activePlayer+'-history').append('<li>Win!</li>');
    }
    else{
      turnTotal = 0;
      $('#'+activePlayer+'-history').append('<li>hold</li>');
      $('#'+activePlayer+'-total').text(activeTotal);
      swap();
    }
  }

  $('#hit').click(function() {
    if(activePlayer==='player1'){
      hit();
    }
  });
  $('#hold').click(function(){
    if(activePlayer==='player1'){
      hold();
    }
  });
  $('#reset').click(function() {
    if(activePlayer==='player1'){
      reset();
    }
  });
  $('#proceedWin').click(function(){
    window.location.href='chapters/5/win.html';
  });
  $('#proceedLose').click(function(){
    window.location.href='chapters/5/lose.html';
  });

});
