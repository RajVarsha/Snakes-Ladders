// the start button is reffered to here
document.getElementById("start").addEventListener("click", startGame, false);

// The game starts here
function startGame(){
    console.log("Choose the players and click to start!")
    var player1 = 0;
    var player2 = 0;
    var position = 0;
    var count = 0;

    var snakesLadders = [
        {
            start: 8,
            end: 2,
            type: 'snake'
        },
        {
            start: 13,
            end: 10,
            type: 'snake'
        },{
            start: 26,
            end: 19,
            type: 'snake'
        },{
            start: 33,
            end: 27,
            type: 'snake'
        },{
            start: 47,
            end: 32,
            type: 'snake'
        },{
            start: 53,
            end: 41,
            type: 'snake'
        },{
            start: 65,
            end: 51,
            type: 'snake'
        },{
            start: 78,
            end: 70,
            type: 'snake'
        },{
            start: 84,
            end: 81,
            type: 'snake'
        },{
            start: 99,
            end: 27,
            type: 'snake'
        },
        {
            start: 4,
            end: 11,
            type: 'ladder'
        },
        {
            start: 7,
            end: 15,
            type: 'ladder'
        },{
            start: 24,
            end: 29,
            type: 'ladder'
        },{
            start: 36,
            end: 41,
            type: 'ladder'
        },{
            start: 44,
            end: 52,
            type: 'ladder'
        },{
            start: 56,
            end: 98,
            type: 'ladder'
        },{
            start: 69,
            end: 75,
            type: 'ladder'
        },{
            start: 72,
            end: 81,
            type: 'ladder'
        },{
            start: 83,
            end: 88,
            type: 'ladder'
        },{
            start: 92,
            end: 97,
            type: 'ladder'
        },
    ]
   
    // Calls player1 to make a move
document.getElementById("player1").addEventListener("click", function(){
    var even = checkCount();
    if (even == 0){
    player1 = play(player1);
    };
    if (player1 >=100){
        console.log("Player1 has won!");
    }else{
    console.log("player1: " + player1);
    };
}, false);

// Calls player2 to make a move
document.getElementById("player2").addEventListener("click", function(){
    var odd = checkCount();
    if (odd == 1){
    position = play(player2);
    player2 = position
    };
    if (player2 >= 100){
        console.log("Player2 has won!");
    }else{
    console.log("player2: " + player2);
    };
}, false);

// Counts the number of moves to decide who plays next
function checkCount(){
    var mod = count%2;
    return mod;
}

// Rolls the dice for each move
function rollingDice(){
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}   

// Makes a move and looks out for snakes/ladders
function play(position){
    if (player1 <= 100 && player2 <= 100){
        var dice = rollingDice();
        console.log("dice:"+ dice);
        position += dice;
        position = checkSnakeLadder(position);
        count = count + 1;
        return position;        
};
};

// Checks if the position encountered has a ladder or snake and moves accordingly
function checkSnakeLadder(position){
    
    for (var i = 0; i <= snakesLadders.length;i++){
        if (snakesLadders[i] != undefined && snakesLadders[i].start == position){
            if (snakesLadders[i].type == "snake"){
                console.log("Snake! " + snakesLadders[i].start)
            }else if (snakesLadders[i].type == "ladder"){
                console.log("Ladder! " + snakesLadders[i].start)
            };
           
            position = snakesLadders[i].end;
            break;
        }

    }return position;
}
};
