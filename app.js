////////////////////////////////////////////////LOGIC/////////////////////////////////////////////////

var score = 0;
var playerChoice;
var win = 0;
var loss = 0;
var tie = 0;
var test = 0;

var readable = {
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
};

var computerChoice = {
    init: function() {
        this.store = Math.floor(3 * Math.random());
        this.text = readable[this.store];
    },
    store: '',
    text: '',

} 



var order = [0, 1, 2, 0];

var rockPaperScissors = function(player, computer) {
    if(order[player] === order[computer]){
        tie++;
        test++;
        
        
        return 'The game is tied. Try again?';
        
    }
    if(order[player] === order[computer + 1]){
        score++;
        win++;
        test++;
        
        
        return 'You win! Play again?';
    }
    else{
        score--;
        loss++;
        test++;
        
        
        return 'You lose! Redeem yourself?';
    }
    
}


////////////////////////////////////////////////USER INTERFACE/////////////////////////////////////////////////


var paragraph = document.querySelector('p');

var assignClick = function(tag,pos) {
    //assign a click listener
    tag.addEventListener('click', function() {
        //set the players choice
        playerChoice = pos
        //computer choice
        computerChoice.init();
        paragraph.innerText = 'The computer chose: ' + computerChoice.text
        //determine winner
        paragraph.innerText += '\n' + rockPaperScissors(playerChoice, computerChoice.store);
        //display winner and score        
        paragraph.innerText += '\n' + 'SCORE: ' + score;

        console.log('wins: ', win);
        console.log('loss: ', loss);
        console.log('ties: ', tie);
        console.log('test: ', test); 
    });
 
}

var images = {
    tags: document.getElementsByTagName('img'),
    init: function() {
        for( var step = 0; step < this.tags.length; step++){
            assignClick(this.tags[step], step);
        }
    }

}

  

images.init();

