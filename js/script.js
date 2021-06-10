function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var numBomb = 16
var numBox = 100
var bombNum = [];
var userNum = [];

while(bombNum.length < numBomb) {
    var num = randomNumber(1, numBox);
    if (!bombNum.includes(num)) {
        bombNum.push(num)
    }
}


while (userNum < (numBox - numBomb)) {
    
}