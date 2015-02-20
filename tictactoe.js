function ticTacToe() {
	var self = this;

	self.player = function(title, playerclass) {
		this.title = title;
		this.moves = [];
		this.playerClass = playerclass;
	}

	//var playerOne = new self.player("Player 1", "x");
	//var playerTwo = new self.player("Player 2", "o");
	
	//What's the difference between:
	//playerOne: new self.player("Player 1", "x");
	//playerTwo: new self.player("Player 2", "o");

	//var currentRound = 0;
	//var currentPlayer;
	self.occupied = new Array();

	self.placeMark = function(squareID, player){
		if(!self.isOccupied(squareID)){
			b.occupied.push([squareID, player.playerClass]);
			player.moves.push(squareID);
			console.log(b.occupied);
			console.log(player.title + " " + player.moves);
			self.isWinner(player);
			b.currentRound++;
		}
	}

	self.isWinner = function(player){
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

	self.hasMoves = function(){
		if(self.occupied.length == 9){
			console.log("board full");
			return false;
		} else {
			return true;
		}
		
	}

	self.isOccupied = function(squareID){
		for(var i=0;  i<self.occupied.length; i++){
			if(self.occupied[i][0] == squareID){
				return true;
			} else {
				return false;
			}
		}
	}

	self.resetBoard = function(){
		self.playerOne.moves = [];
		self.playerTwo.moves = [];
		self.currentRound = 0;
		self.occupied = [];

	}
	
}

var b = new ticTacToe();
b.playerOne = new b.player("Player One", "x");
b.playerTwo = new b.player("Player Two", "o");
b.currentRound = 0;

//
do {
	var player = b.currentRound % 2 ? b.playerTwo : b.playerOne;
	var cell = Math.floor(Math.random()*9);

	b.placeMark(cell,player);
	console.log("current round: " + b.currentRound + " cell: " + cell + " " + player.title);
} while(b.hasMoves());



