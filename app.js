// LOGIC

var score = 0;
var playerChoice;

var readable = {
    '0': 'Rock',
    '1': 'Scissors',
    '2': 'Paper'
};

var computerChoice = Math.floor(3 * Math.random());
console.log('computerChoice: ', computerChoice)

var rockPaperScissors = function(playerChoice, computerChoice) {


    
    if(playerChoice == 0){
        if(computerChoice == 0){
            var result = 'tie';
        }
        if(computerChoice == 1){
            var result = 'win';
            score++;
            
        }
        if(computerChoice == 2){
            var result = 'lose';
            score--
        }
    }

    if(playerChoice == 1){
        if(computerChoice == 0){
            var result = 'lose';
            score--
        }
        if(computerChoice == 1){
            var result = 'tie';
        }
        if(computerChoice == 2){
            var result = 'win';
            score++;
        }
    }

    if(playerChoice == 2){
        if(computerChoice == 0){
            var result = 'win';
            score++;
        }
        if(computerChoice == 1){
            var result = 'lose';
            score--
        }
        if(computerChoice == 2){
            var result = 'tie';
        }
    }
    
}