//Challenge 1

function AgeInDays() {
    var birthYear = prompt('What year were you born?');
    var days = (2020 - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are ' + days + ' days old');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').innerHTML ="";
    document.getElementById('flex-box-result').appendChild(h2);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2
function catGenerator(num) {
    var cat = document.createElement('img');
    var catPath = 'static/images/' + num.toString(10) + '.gif';
    cat.setAttribute('src', catPath);
    document.getElementById('cat-box').appendChild(cat);
}

// Challenge 3
function rockPaperScissors(choice) {
    var selection = choice.id;
    var rpsArr = ['rock', 'paper', 'scissors'];
    var botSelection = rpsArr[Math.floor(Math.random() * rpsArr.length)];
    var result = decideWinner(selection, botSelection);
    var message = finalMessage(result);
    displayRPS(selection, botSelection, message);
}

function decideWinner(selection, botSelection) {
    if (selection == 'paper') {
        if (botSelection =='rock') {
            return('You Win!');
        } else if (botSelection == 'scissors') {
            return('You Lose!')
        } else if (botSelection == 'paper') {
            return("It's a Tie!");
        }
    } else if (selection == 'rock') {
        if (botSelection == 'scissors') {
            return('You Win!');
        } else if (botSelection == 'paper') {
            return('You Lose!')
        } else if (botSelection == 'rock') {
            return("It's a Tie!");
        }
    } else if (selection == 'scissors') {
        if (botSelection =='paper') {
            return('You Win!');
        } else if (botSelection == 'rock') {
            return('You Lose!')
        } else if (botSelection == 'scissors'){
            return("It's a Tie!");
        }
    }
}

function finalMessage(results) {
    var h2 = document.createElement('h2');
    if (results == 'You Win!') {
        h2.setAttribute('id', 'winner');
    } else if (results == 'You Lose!') {
        h2.setAttribute('id', 'loser');
    } else if (results == "It's a Tie!") {
        h2.setAttribute('id', 'tie');
    }
    var result = document.createTextNode(results);
    h2.appendChild(result);
    return(h2);
}

function displayRPS(selection, botSelection, message) {
    document.getElementById('rps-game').innerHTML = "";
    var human, robot;
    if (selection == 'paper'){
        human = document.createElement('img');
        human.setAttribute('src', 'static/images/paper.jpeg');
        human.setAttribute('class', 'rock-paper-scissor-item-human');
    } else if (selection == 'rock') {
        human = document.createElement('img');
        human.setAttribute('src', 'static/images/rock.png');
        human.setAttribute('class', 'rock-paper-scissor-item-human');
    } else if (selection == 'scissors') {
        human = document.createElement('img');
        human.setAttribute('src', 'static/images/scissors.png');
        human.setAttribute('class', 'rock-paper-scissor-item-human');
    }
    if (botSelection == 'paper'){
        robot = document.createElement('img');
        robot.setAttribute('src', 'static/images/paper.jpeg');
        robot.setAttribute('class', 'rock-paper-scissor-item-robot');
    } else if (botSelection == 'rock') {
        robot = document.createElement('img');
        robot.setAttribute('src', 'static/images/rock.png');
        robot.setAttribute('class', 'rock-paper-scissor-item-robot');
    } else if (botSelection == 'scissors') {
        robot = document.createElement('img');
        robot.setAttribute('src', 'static/images/scissors.png');
        robot.setAttribute('class', 'rock-paper-scissor-item-robot');
    }
    document.getElementById('rps-game').appendChild(human);
    document.getElementById('rps-game').appendChild(message);
    document.getElementById('rps-game').appendChild(robot);
}

//Challenge 4
var allButtons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
} 

function buttonColorChange(buttonChoice) {
    if (buttonChoice.value == 'red'){
        buttonsRed();
    } else if (buttonChoice.value === 'green') {
        buttonsGreen();
    } else if (buttonChoice.value === 'reset') {
        buttonColorReset();
    } else if (buttonChoice.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let randColor = {
        0: 'btn-success',
        1: 'btn-danger',
        2: 'btn-warning',
        3: 'btn-primary'
    }
    for (let i=0; i< allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randColor[Math.floor(Math.random() * 4)]);
    }
}

// Challenge 5

let blackjackGame = {
    'you': {'scoreSpan': '#player-result', 'div': '#blackjack-player', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-result', 'div': '#blackjack-dealer', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'isStand': false,
    'dealCards': false
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const loseSound = new Audio('static/sounds/aww.mp3');

const deck = {
    'A': ['static/images/blackjack/A.png', [1, 11]],
    '2': ['static/images/blackjack/2.png', 2],
    '3': ['static/images/blackjack/3.png', 3],
    '4': ['static/images/blackjack/4.png', 4],
    '5': ['static/images/blackjack/5.png', 5],
    '6': ['static/images/blackjack/6.png', 6],
    '7': ['static/images/blackjack/7.png', 7],
    '8': ['static/images/blackjack/8.png', 8],
    '9': ['static/images/blackjack/9.png', 9],
    '10': ['static/images/blackjack/10.png', 10],
    'J': ['static/images/blackjack/J.png', 10],
    'Q': ['static/images/blackjack/Q.png', 10],
    'K': ['static/images/blackjack/K.png', 10],
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomNumber];
}

document.querySelector('#black-hit').addEventListener('click', blackjackHit);
document.querySelector('#black-stand').addEventListener('click', blackjackStand);
document.querySelector('#black-deal').addEventListener('click', blackjackReset);

let wins = 0;
let losses = 0;
let draws = 0;

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(YOU, card);
        updateScore(YOU, card);
        if (document.querySelector(YOU['scoreSpan']).textContent === 'BUST!' && document.querySelector(DEALER['scoreSpan']).textContent != 'BUST!') {
            document.querySelector('#blackjack-result').textContent = 'YOU LOSE!';
            document.querySelector('#blackjack-result').style.color = 'red';
            loseSound.play();
        }
    }
}

async function blackjackStand() {
    while(DEALER['score'] < YOU['score']){
        let card = randomCard();
        showCard(DEALER, card);
        updateScore(DEALER, card);
        await sleep(1000);
    }
    if (DEALER['score'] < YOU['score'] && document.querySelector(YOU['scoreSpan']).textContent != 'BUST!'){
        document.querySelector('#blackjack-result').textContent = 'YOU WIN!';
        document.querySelector('#blackjack-result').style.color = 'green';
        winSound.play();
    } else if (DEALER['score'] > YOU['score'] && document.querySelector(DEALER['scoreSpan']).textContent != 'BUST!'){
        document.querySelector('#blackjack-result').textContent = 'YOU LOSE!';
        document.querySelector('#blackjack-result').style.color = 'red';
        loseSound.play();
    } else if (document.querySelector(DEALER['scoreSpan']).textContent === 'BUST!' && document.querySelector(YOU['scoreSpan']).textContent != 'BUST!') {
        document.querySelector('#blackjack-result').textContent = 'YOU WIN!';
        document.querySelector('#blackjack-result').style.color = 'green';
        winSound.play();
    } else if (document.querySelector(YOU['scoreSpan']).textContent === 'BUST!' && document.querySelector(DEALER['scoreSpan']).textContent != 'BUST!') {
        document.querySelector('#blackjack-result').textContent = 'YOU LOSE!';
        document.querySelector('#blackjack-result').style.color = 'red';
        loseSound.play();
    } else if (DEALER['score'] === YOU['score']){
        document.querySelector('#blackjack-result').textContent = "IT'S A DRAW!";
        document.querySelector('#blackjack-result').style.color = 'gold';
    }
    blackjackGame['isStand'] = true;
}

function showCard(activePlayer, card) {
    if (activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = deck[card][0];
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackReset() {
    let yourImages = document.querySelector('#blackjack-player').querySelectorAll('img');
    let dealerImages = document.querySelector('#blackjack-dealer').querySelectorAll('img');
    for (let i=0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (let i=0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
    document.querySelector(YOU['scoreSpan']).innerHTML = '0';
    YOU['score'] = 0;
    document.querySelector(YOU['scoreSpan']).style.color = 'white';
    document.querySelector(DEALER['scoreSpan']).innerHTML = '0';
    DEALER['score'] = 0;
    document.querySelector(DEALER['scoreSpan']).style.color = 'white';
    if (document.querySelector('#blackjack-result').textContent === 'YOU WIN!') {
        wins += 1;
        document.querySelector('#wins').textContent = wins;
    } else if (document.querySelector('#blackjack-result').textContent === 'YOU LOSE!') {
        losses += 1;
        document.querySelector('#losses').textContent = losses;
    } else if (document.querySelector('#blackjack-result').textContent === "IT'S A DRAW!") {
        draws += 1;
        document.querySelector('#draws').textContent = draws;
    }
    document.querySelector('#blackjack-result').textContent = "Let's Play!";
    document.querySelector('#blackjack-result').style.color = 'black';
    blackjackGame['isStand'] = false;
}

function updateScore(activePlayer, card) {
    if (card === 'A'){
        if ((activePlayer['score'] + 11) <= 21) {
            activePlayer['score'] += parseInt(deck[card][1][1]);
        } else {
            activePlayer['score'] += parseInt(deck[card][1][0]);
        }
    } else {
        activePlayer['score'] += parseInt(deck[card][1]);
    }
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).innerHTML = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).innerHTML = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }