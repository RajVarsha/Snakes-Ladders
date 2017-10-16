
module.exports = {
    start: {
        count: 0,
        player1: 0,
        player2 : 0,
        count : 0,
        position : 0,
        snakesLadders : [
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
    },
    startGame: function(){
        console.log(this.start.count)
        console.log("Choose the players and click to start!")
    },

    player1: function(){
        var even = this.checkCount();
        if (even == 0){
            this.start.player1 = this.play(this.start.player1);
            };
        if (this.start.player1 >=100){
            console.log("Player1 has won!");
        }else{
            console.log("player1: " + this.start.player1);
            };
    },
    
    player2: function(){
        var odd = this.checkCount();
        if (odd == 1){
        this.start.position = this.play(this.start.player2);
        this.start.player2 = this.start.position
        };
        if (this.start.player2 >= 100){
            console.log("Player2 has won!");
        }else{
        console.log("player2: " + this.start.player2);
        };
    },
    // Rolls the dice for each move
    rollingDice: function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
    },

    play: function(position){
        if (this.start.player1 <= 100 && this.start.player2 <= 100){
            var dice = this.rollingDice();
            console.log("dice:"+ dice);
            position += dice;
            position = this.checkSnakeLadder(position);
            this.start.count = this.start.count + 1;
            return position;        
    };
    },

    checkSnakeLadder: function(position){
        
        for (var i = 0; i <= this.start.snakesLadders.length;i++){
            if (this.start.snakesLadders[i] != undefined && this.start.snakesLadders[i].start == position){
                if (this.start.snakesLadders[i].type == "snake"){
                    console.log("Snake! " + this.start.snakesLadders[i].start)
                }else if (this.start.snakesLadders[i].type == "ladder"){
                    console.log("Ladder! " + this.start.snakesLadders[i].start)
                };
               
                position = this.start.snakesLadders[i].end;
                break;
            }
    
        }return position;
    }
};

// the start button is reffered to here
document.getElementById("start").addEventListener("click", exports.module.startGame, false);
document.getElementById("player1").addEventListener("click", exports.module.player1, false);
document.getElementById("player2").addEventListener("click", exports.module.player2, false);
