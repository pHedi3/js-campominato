function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var numBomb = 16
var numBox = 100
var bombNumList = [];
var userNumList = [];

while(bombNumList.length < numBomb) {
    var num = randomNumber(1, numBox);
    if (!bombNumList.includes(num)) {
        bombNumList.push(num)
    }
}
console.log(bombNumList)

while (userNumList.length < (numBox - numBomb)) {
    var userNum = parseInt(prompt('inserisci un numero da 1 a 100'))
    if(!userNumList.includes(userNum) && !bombNumList.includes(userNum)) {
        userNumList.push(userNum)
    } else if (bombNumList.includes(userNum)) {
        break
    } else {
        alert('numero gia inserito')
    }
}

document.getElementById('result').innerHTML = 'il tuo punteggio è: ' + userNumList.length;