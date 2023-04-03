var scores, roundScore, activePlayer, game_active; // we have not defined dice variable because we will define it inside the function

init();

//---------------------- things happen when we click roll dice------------------------------------
document.querySelector('.btn--roll').addEventListener("click" , function(){

	if (game_active) {
		// 1. Generate random no
		var dice = Math.floor(Math.random()*6) +1;

		// 2. Dissplay the result
		var dice_dom = document.querySelector('.dice');  // selecting the dice class where it is called
		dice_dom.style.display = "block";                // unhiding the dice image
		dice_dom.src = "/Pig_Game/images/dice-" + dice + ".png";          // showing the selected dice image

		//or can this can also be used instead of above meatod
		document.querySelector('.dice').style.display = "block";            // unhiding the dice image
		document.querySelector('.dice').src = "/Pig_Game/images/dice-" + dice + ".png";      // showing the selected dice image

		//3. Updating the round score if rolled number is not 1.
		if(dice !== 1){
			// Add Score
			roundScore += dice;
			document.querySelector("#current--" + activePlayer).textContent= roundScore;
		}	
		else{
			// Next Player
			next_player();		
		}
	}	
});


//---------------------- things happen when we click hold dice------------------------------------------
document.querySelector('.btn--hold').addEventListener("click" , function(){

	if(game_active){
		// Add the round score to the total score of the active player
		scores[activePlayer] += roundScore;
		document.getElementById('score--' + activePlayer).textContent= scores[activePlayer];

		// winner
		if(scores[activePlayer] >= 100 ){
			document.querySelector('#name--' + activePlayer).textContent= "winner";
			document.querySelector(".dice").style.display="none";
			document.querySelector('.player--' + activePlayer).classList.add("player--winner");
			document.querySelector('.player--' + activePlayer).classList.remove("player--active");
			game_active=false;
		}
		else{
			// Next Player
			next_player();
		}
	}
} );


//---------------------- things happen when we click new game------------------------------------------
document.querySelector('.btn--new').addEventListener("click",init); //we dont use () in init()



//------------------- defining init function  ---------------------------------------------------------
function init(){
	scores=[0,0];
	roundScore=0; 
	activePlayer=0;
	game_active = true;  

	// on reload hiding the dice image
	document.querySelector(".dice").style.display="none";

	// setting  all values to 0
	document.getElementById('score--0').textContent="0";
	document.getElementById('score--1').textContent="0";
	document.getElementById('current--0').textContent="0";
	document.getElementById('current--1').textContent="0";
	document.getElementById('name--0').textContent="Player 1";
	document.getElementById('name--1').textContent="Player 2";
	document.querySelector('.player--0').classList.remove("player--winner");
	document.querySelector('.player--1').classList.remove("player--winner");
	document.querySelector('.player--0').classList.remove("player--active");
	document.querySelector('.player--1').classList.remove("player--active");
	document.querySelector('.player--0').classList.add("player--active");
}



//------------------- defining function next player---------------------------------------------------------
function next_player(){
	// Next Player
		roundScore = 0;
		document.querySelector("#current--" + activePlayer).textContent= roundScore;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  

		// toggling and changing the active player desiging by changing the class by class.list
		document.querySelector('.player--0').classList.toggle("player--active");	
		document.querySelector('.player--1').classList.toggle("player--active");	

		// Hiding dice again
		document.querySelector(".dice").style.display="none";
}


