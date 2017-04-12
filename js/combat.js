function coinToss(){
  return Math.ceil(Math.random()*2);
}
var queryStats = window.location.hash.substring(1);
var playerTurn = true;
//initial stats
var origPlayer = {name: 'Player', id: 'You', health: 20, damage: 3, will: 2, defense: 2};
var origEnemy = {name: 'Enemy', id: 'enemy', health: parseInt(queryStats.substring(0,2)), damage: parseInt(queryStats.substring(2,3)), will: parseInt(queryStats.substring(3,4)), defense:parseInt(queryStats.substring(4,5))}
// var origEnemy = {name: 'Enemy', id: 'enemy', health: 20, damage: 3, will: 3, defense:2}
//modified stats
var playerTest = {name: 'Player', id: 'You',  health: 20,damage: 3, will: 2, defense: 2};
// var enemyTest = {name: 'Enemy', id: 'enemy', health: 20, damage: 3, will: 3, defense:2}
var enemyTest = {name: 'Enemy', id: 'enemy', health: parseInt(queryStats.substring(0,2)), damage: parseInt(queryStats.substring(2,3)), will: parseInt(queryStats.substring(3,4)), defense:parseInt(queryStats.substring(4,5))}
//turn switch
function turnSwap(){
  playerTurn=!playerTurn;
  $('#YouName').toggleClass('activePlayer');
  $('#enemyName').toggleClass('activePlayer');
}

//Attack function, roll 1-6 and add damage stat, subtract target defense
function damage(attacker, defender){
  var roll = Math.ceil(Math.random()*6);
  var damage = Math.abs((roll+attacker.damage)-defender.defense)
  if(roll===6){
    damage *= 2;
  }
  $('#'+attacker.id+'Log').append("<li>"+damage+" damage dealt.</li>")
  defender.health -= damage;
  $('#'+defender.id+'Health').text('Health: '+defender.health)
  if(playerTest.health<=0){
    $('#enemyLog').append('<li>You are slain!</li>');
    $('.btn').hide();
    $('#proceedLose').show();
  }
  else{
    turnSwap();
  }
  console.log(roll, damage);
}

//Charge function, roll 1-6, add damage. Ignore armor but suffer 1/3 of damage.
function charge(attacker, defender){
  var roll = Math.ceil(Math.random()*6);
  var damage = Math.abs(roll+attacker.damage)
  attacker.health -= Math.round(damage/3);
  if(roll===6){
    attack *= 2;
  }
  $('#'+attacker.id+'Log').append("<li>"+damage+" charge damage dealt. "+Math.round(damage/3)+" recoil damage taken.</li>")
  defender.health -= damage;
  $('#'+attacker.id+'Health').text('Health: '+attacker.health)
  $('#'+defender.id+'Health').text('Health: '+defender.health)
  if(playerTest.health<=0){
    $('#enemyLog').append('<li>You are slain!</li>');
    $('.btn').hide();
    $('#proceedLose').show();
  }
  else{
  turnSwap();
  }
}

//Defend function, increase defense by 1 to a maximum of +6
function defend(defender, origDefender){
  if(defender.defense+1<=origDefender.defense+6){
    defender.defense += 1;
    $('#'+defender.id+'Log').append("<li> Defense rises to "+defender.defense+".</li>")
  }
  else{
    $('#'+defender.id+'Log').append('<li>Defense is at maximum</li>')
  }
  $('#'+defender.id+'Defense').text('Defense: '+defender.defense)
  turnSwap();
}

//Heal function, heal for 1d6 + will
function heal(defender, origDefender){
  var roll = Math.ceil(Math.random()*4);
  var heal = roll+defender.will;
  console.log(heal,roll, defender.will);
  if(defender.health+heal<=origDefender.health){
    defender.health += heal;
  }
  else{
    defender.health = origDefender.health;
  }
  $('#'+defender.id+'Log').append("<li>"+heal+' health healed.</li>')
  $('#'+defender.id+'Health').text('Health: '+defender.health)
  turnSwap();
}

//AI script, if high health, will charge, attack or defend. On low health will either attack or heal.
function aiTurn(){
  var decision = Math.ceil(Math.random()*6);
  if(enemyTest.health>=origEnemy.health*.4){//above 40% health
    if(playerTest.defense>origPlayer.defense+2){
      charge(enemyTest, playerTest);
    }
    else if(decision>2){
      damage(enemyTest, playerTest);
    }
    else{
      defend(enemyTest, origEnemy);
    }
  }
  else{//below 40% health
    if(decision>2){
      heal(enemyTest, origEnemy);
    }
    else{
      damage(enemyTest, playerTest);
    }
  }
}

$(document).ready(function(){
  console.log(enemyTest);
  $('#YouHealth').text('Health: '+origPlayer.health);
  $('#YouDefense').text('Defense: '+origPlayer.defense);
  $('#YouName').text(origPlayer.name);
  $('#enemyHealth').text('Health: '+origEnemy.health);
  $('#enemyDefense').text('Defense: '+origEnemy.defense);
  $('#enemyName').text(origEnemy.name);

  //Chooses first player at random
  if(coinToss()===1){
    playerTurn = false;
    $('#enemyName').addClass('activePlayer');
    setTimeout(function(){alert('The enemy strikes first!');aiTurn();}, 1000);
  }
  else{
    $('#YouName').addClass('activePlayer');
  }

  //click functions for player combat
  $('#attack').click(function(){
    if(playerTurn){
      damage(playerTest, enemyTest);
      if(enemyTest.health<=0){
        $('#YouLog').append('<li>The enemy is slain!</li>');
        $('.btn').hide();
        $('#proceedWin').show();
      }
      else{
        setTimeout(function(){aiTurn();}, 2000);
      }
    }
  });
  $('#charge').click(function(){
    if(playerTurn){
      charge(playerTest, enemyTest);
      if(enemyTest.health<=0){
        $('#YouLog').append('<li>The enemy is slain!</li>');
        $('.btn').hide();
        $('#proceedWin').show();
      }
      else{
        setTimeout(function(){aiTurn();}, 2000);
      }
    }
  });
  $('#defend').click(function(){
    if(playerTurn){
      defend(playerTest, origPlayer);
      setTimeout(function(){aiTurn();}, 2000);
    }
  });
  $('#heal').click(function(){
    if(playerTurn){
      heal(playerTest, origPlayer);
      setTimeout(function(){aiTurn();}, 1500);
    }
  });
  $('#proceedWin').click(function(){
    var page = queryStats.substring(6,7);
    window.location.href = "chapters/"+page+"/chapter"+page+".html";
  });
  $('#proceedLose').click(function(){
    var page = queryStats.substring(5,6);
    window.location.href = "chapters/"+page+"/chapter"+page+".html";
  });
});
