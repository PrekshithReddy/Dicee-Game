var randomNumber1=Math.floor(Math.random()*6)+1;

var diceImage="dice"+randomNumber1+".png"; //dice1.png to dice6.png;

var randomImageSource="images/"+diceImage; //images/dice1.png to images/dice6.png;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var diceImage2="dice"+randomNumber2+".png";

var randomImageSource1="images/"+diceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}