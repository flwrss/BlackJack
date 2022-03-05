let firstCard = getRandomNum()
let secondCard = getRandomNum()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let personEl = document.getElementById("person-el")
let person = {
    name:"Robert Di Nero",
    balance:190
}
personEl.textContent = person.name + ": $" + person.balance
function getRandomNum(){
    let result = Math.floor(Math.random()*13) + 1
    if (result===1){
        return 11
   }else if (result > 10){
       return 10
    }else{
       return result
    }
}

function startGame(){
   firstCard = getRandomNum()
   secondCard = getRandomNum()
   cards = [firstCard , secondCard]
   cardsEl.textContent = "Cards: "
   renderGame()
   sum = 0
}
function renderGame(){
    for( let i = 0; i< cards.length; i++){
    cardsEl.textContent +=  cards[i] + " "
    sum  += cards[i]
    sumEl.textContent = "Sum: " + sum 
    }
    if( sum < 21 ){
       messageEl.textContent = "Do you want to draw a new card"
       isAlive = true
    } else if(sum === 21){
       messageEl.textContent = "You have a BlackJack"
       hasBlackJack = true
    }else{
      messageEl.textContent = "You are out of the game" 
      isAlive = false
    }
}
function newCard(){
   if(hasBlackJack === false && isAlive === true){
   cardsEl.textContent = "Cards: "
   cards.push(getRandomNum())
   renderGame()
   } 
   sum = 0
}
