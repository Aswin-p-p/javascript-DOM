let [computer_score,user_score]=[0,0];
let result=document.getElementById("result");
let choices= {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}
function check() {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);
}