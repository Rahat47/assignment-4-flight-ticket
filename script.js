'use strict'
//Dom queries
const firstClassTicket = document.querySelector('#firstClass')
const economyTicket = document.querySelector('#economy')
//buttons for first class ticket
const increseFirstClass = document.querySelector('#plusFirst')
const decreaseFirstClass = document.querySelector('#minusFirst')
// buttons for economy ticket
const increaseEconomy = document.querySelector('#plusEco')
const decreaseEconomy = document.querySelector('#minusEco')


//change count of value when button clicked
increseFirstClass.addEventListener('click', function () {
    increaseCount(firstClassTicket)
})
decreaseFirstClass.addEventListener('click', function () {
    decreaseCount(firstClassTicket)
})
increaseEconomy.addEventListener('click', function () {
    increaseCount(economyTicket)
})
decreaseEconomy.addEventListener('click', function () {
    decreaseCount(economyTicket)
})

//preventing negetive value from manual input
firstClassTicket.addEventListener('keyup', function (e) {
    if (e.keyCode == 109 || e.keyCode == 189) {
        firstClassTicket.value = ''
    }
})
economyTicket.addEventListener('keyup', function (e) {
    if (e.keyCode == 109 || e.keyCode == 189) {
        economyTicket.value = ''
    }
})








//Functions

function increaseCount(itemToIncrease) {
    itemToIncrease.value++
    removeClass(itemToIncrease, 'error')
}
function decreaseCount(itemToDecrease) {
    let currentValue = Number(itemToDecrease.value)
    if (!currentValue || currentValue < 0) {
        itemToDecrease.classList.add('error')
    } else {
        itemToDecrease.value--
    }
}

function removeClass(from, className) {
    from.classList.remove(className)
}
function addClass(from, className) {
    from.classList.add(className)
}