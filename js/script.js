function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var numBomb = 0
var numBox = 0
var bombNumList = [];
var userNumList = [];
var dif = prompt('inserisci difficoltà tra 0, 1 e 2')

switch (dif) {
    case '0':
        numBomb = 16
        numBox = 100
        break
    case '1':
        numBomb = 16
        numBox = 80
        break
    case '2': 
        numBomb = 16
        numBox = 50
        break
    
    default:
        alert('hai selezionato una difficoòtà inesistente')

}

while(bombNumList.length < numBomb) {
    var num = randomNumber(1, numBox);
    if (!bombNumList.includes(num)) {
        bombNumList.push(num)
    }
}
console.log(bombNumList)

while (userNumList.length < (numBox - numBomb)) {
    var userNum = parseInt(prompt('inserisci un numero da 1 a ' + numBox))
    if(isNaN(userNum)) {
        alert('devi inserire un numero')
    } else if (!userNumList.includes(userNum) && !bombNumList.includes(userNum)) {
        userNumList.push(userNum)
    } else if (bombNumList.includes(userNum)) {
        break
    } else {
        alert('numero gia inserito')
    }
}

document.getElementById('result').innerHTML = 'il tuo punteggio è: ' + userNumList.length;