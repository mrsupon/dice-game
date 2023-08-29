playGame();

function playGame(){
    var data = ["",0,0];
    random2Dice(data);
    document.querySelector(".img1").setAttribute("src","./images/dice"+data[1]+".png")
    document.querySelector(".img2").setAttribute("src","./images/dice"+data[2]+".png")
    document.querySelector("h1").innerHTML = data[0];
}

function randomNumber(min, max){
    return Math.floor(Math.random()*max) + min;
}

function random2Dice(data){
    data[1] = randomNumber(1, 6);
    data[2] = randomNumber(1, 6);
    if(data[1] > data[2]) data[0]="🚩 Player 1 Wins!";
    else if(data[1] < data[2]) data[0]="Player 2 Wins! 🚩";
    else data[0]="Draw!";
}