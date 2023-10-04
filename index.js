function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNum1 = randomNumber(1,6);
var img1String = "images/dice" + randomNum1 + ".png";
var img1 = document.getElementById("img1");
img1.setAttribute("src", img1String);

var randomNum2 = randomNumber(1,6);
var img2String = "images/dice" + randomNum2 + ".png";
var img2 = document.getElementById("img2");
img2.setAttribute("src", img2String);

var title = document.getElementById("title");

if (randomNum1 > randomNum2) {
    title.innerHTML = "Player 1 Wins!"
}
else if (randomNum1 < randomNum2) {
    title.innerHTML = "Player 2 Wins!"
}
else {
    title.innerHTML = "DRAW!"
}