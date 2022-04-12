let firstcard;
let secondcard;
let hasBlackJack = false;
let isAlive = true;
// firstcard = 
// secondcard = Math.floor( Math.random() * 12 ) + 2;





messager = document.getElementById("message-p");

 // [].push(5) == [].append(5)


let sumer = document.querySelector("#sum");

let cards = document.querySelector("#cards");


function startGame() {
  firstcard = getRandomCard();
  secondcard = getRandomCard();
  hasBlackJack = false;
  isAlive = true;
  msg = ''
  cardsarray = [firstcard, secondcard];
  sumcard = firstcard + secondcard;
  console.log("Started a new game");
  renderGame();
  
}


function getRandomCard(){
  let gen = parseInt(Math.floor( Math.random() * 13 ) + 1);
  if (gen == 1) {
    return 11;
  }
  else if (gen === 11 | gen === 12 || gen === 13) {
    return 10;
  }
  else {
    return gen;
  }
}


function renderGame() {
  card_msg = 'Cards: '

  for (let i = 0; i<cardsarray.length; i++) {
    card_msg = card_msg + ' ' + cardsarray[i];
  }

  cards.textContent = card_msg;
  sumer.textContent = "Sum: " +sumcard;
  
  
  
  if (sumcard === 21) {
    msg = "You've got BlackJack!!";
    hasBlackJack = true;
  }
  else if (sumcard < 21) {
    msg = "Do you want to draw a new card?";
  }
  else if (sumcard > 21) {
    msg = "You lost :((";
    isAlive = false;
  }

  
  messager.textContent = msg;
}


function drawCard() {
  new_card = getRandomCard();
  sumcard += new_card;
  cardsarray.push(new_card);
  renderGame();
}



/* 
    START      FINISH    STEP
for (let j = 1; j < 11; j +=1 ) {}

*/