// import game from './script.js';
// import * as app from '/app.js';
// {/* <script src="node_modules/chai/chai.js"></script>
// var chai = require("chai"); */}
// // var expect = chai.expect;

var expect = require("chai").expect
var request = require("request");
var assert = require("assert");
var script = require("./script.js")

var core = require('./core');

core.rollDice();
var game = require('./game');
var base_url = "http://localhost:3000/";
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
describe("Hello world Test", function(){
    describe("GET /", function(){
        it("returns status code 200", function(){
            request.get(base_url, function(error, response, body){
                assert.equal(200, response.statusCode)
                done();
            });
            
        });
    });
});
// "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
describe("testing app", function(){
    it("returns correct positions for snakes and ladders", function(){
        var position = 26;
        snakesLadders.forEach(function(element, index, snakesLadders) {
            position = snakesLadders[index].start;
            var newPosition = game.checkSnakeLadder(position);
            expect(newPosition).to.equal(snakesLadders[index].end);
        });   
    });
});

function rollingDice(){
   return dice = 5;
 }
 describe("testing play function", function(){
     it("rolls the dice, checks for snakes/ladders and makes a move", function(){
         var position = 25;
         dice = rollingDice();
         newPosition = game.play(position);
         expect(newPosition).to.equal(position+dice);
     })
 })