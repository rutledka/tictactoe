function ticTacToe() {
	var self = this;

	self.player = function(title, playerclass) {
		this.title = title;
		this.moves = [];
		this.playerClass = playerclass;
	}

	var playerOne = new self.player("Player 1", "x");
	var playerTwo = new self.player("Player 2", "o");
	var currentRound = 0;
	var currentPlayer;
	var occupied = [];

	self.init = function(){
		currentPlayer = currentRound % 2 ? playerTwo : playerOne;

		currentRound++;

	}

	self.placeMark = function(squareID, player){
		occupied.push([squareID, player.playerClass]);
		player.moves.push(squareID);
		console.log(occupied);
		console.log(player.moves);
		self.checkValues(player);
	}

	self.checkValues = function(player){
		//Hardcoded the winning possibilities
		var winners = [
		[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
		];

		for(var i=0; i<winners.length; i++){

			result = winners[i].every(function(val){
			//compare player arrays vs. every win condition
			var numIn1 = Array.prototype.filter.call(
				player.moves, function(el){ return el === val}
				).length;		
			var numIn2 = Array.prototype.filter.call(
				winners[i], function(el){ return el === val}
				).length;
			return numIn1 === numIn2;
			});

			//return true if player has won
			if(result){
				console.log(player.title + " has won!");
				return true;
			}
		}
		return false;
	}

	self.resetBoard = function(){
		playerOne.moves = [];
		playerTwo.moves = [];
		currentRound = 0;
		occupied = [];

	}

	self.init();
	
}






























