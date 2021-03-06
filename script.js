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
// total , subtotal and vat reference
let subtotal = document.querySelector('#subtotal')
let vat = document.querySelector('#vat')
let total = document.querySelector('#total')


//change count of value when button clicked
increseFirstClass.addEventListener('click', function () {
    increaseCount(firstClassTicket)
    calculateTotal()
})
decreaseFirstClass.addEventListener('click', function () {
    decreaseCount(firstClassTicket)
    calculateTotal()
})
increaseEconomy.addEventListener('click', function () {
    increaseCount(economyTicket)
    calculateTotal()
})
decreaseEconomy.addEventListener('click', function () {
    decreaseCount(economyTicket)
    calculateTotal()
})

//preventing negetive value from manual input
firstClassTicket.addEventListener('keyup', function (e) {
    if (e.keyCode == 109 || e.keyCode == 189 || firstClassTicket.value < 0) {
        firstClassTicket.value = ''
        addSnackbar('Negetive values are not accepted')
    } else {
        calculateTotal()
    }

})
economyTicket.addEventListener('keyup', function (e) {
    if (e.keyCode == 109 || e.keyCode == 189 || economyTicket.value < 0) {
        economyTicket.value = ''
        addSnackbar('Negetive values are not accepted')
    } else {
        calculateTotal()
    }

})

// calulating value on chage
firstClassTicket.addEventListener('change', function () {
    if (firstClassTicket.value < 0) {
        addSnackbar('Negetive values are not accepted')
    } else {
        calculateTotal()
    }
})
economyTicket.addEventListener('change', function () {
    if (economyTicket.value < 0) {
        addSnackbar('Negetive values are not accepted')
    } else {
        calculateTotal()
    }
})

// calculate total value
function calculateTotal() {
    let firstClassPrice = firstClassTicket.value * 150
    let economyPrice = economyTicket.value * 100
    let subtotalPrice = subtotal.textContent = firstClassPrice + economyPrice
    let vatPrice = vat.textContent = subtotalPrice * 10 / 100
    let totalPrice = total.textContent = subtotalPrice + vatPrice
    return totalPrice
}


// Generation New Ticket Recipts
const bookNowbtn = document.querySelector('#book-now')
bookNowbtn.addEventListener('click', function () {
    //dom query for getting the value
    const flyFrom = document.querySelector('.fly-from').value.trim()
    const flyTo = document.querySelector('.fly-to').value.trim()
    const departure = document.querySelector('.departure').value.trim()
    const returnDate = document.querySelector('.return').value.trim()
    const firstClass = firstClassTicket.value.trim()
    const economy = economyTicket.value.trim()

    const mainContent = document.querySelector('.main-content')
    const reciept = document.querySelector('.table')

    // condition check for empty values
    if (!flyTo || !flyFrom || !departure || !returnDate) {
        addSnackbar('Please fill the nesessary information to book a ticket')
        return
    } else if (!firstClass && !economy || firstClass == 0 && economy == 0) {
        addSnackbar('Please choose a ticket type to continue')
        return
    }

    mainContent.style.setProperty('display', 'none')
    reciept.style.setProperty('display', 'block')
    // dom query to update the value
    document.querySelector('.fly-from-rec').textContent = flyFrom
    document.querySelector('.fly-to-rec').textContent = flyTo
    document.querySelector('.departure-rec').textContent = departure
    document.querySelector('.return-rec').textContent = returnDate
    document.querySelector('.firstClass-rec').textContent = firstClass
    document.querySelector('.firstClassAmount-rec').textContent = `$${firstClass * 150}`
    document.querySelector('.economyClass-rec').textContent = economy
    document.querySelector('.economyClassAmount-rec').textContent = `$${economy * 100}`
    document.querySelector('.total-rec').textContent = `$${(firstClass * 150) + (economy * 100)}`
})



//Functions
//increase the value
function increaseCount(itemToIncrease) {
    itemToIncrease.value++
    removeClass(itemToIncrease, 'error')
}
//decrease the value
function decreaseCount(itemToDecrease) {
    let currentValue = Number(itemToDecrease.value)
    if (!currentValue || currentValue < 0) {
        itemToDecrease.classList.add('error')
    } else {
        itemToDecrease.value--
    }
}
//remove error class
function removeClass(from, className) {
    from.classList.remove(className)
}
//add error class
function addClass(from, className) {
    from.classList.add(className)
}

function addSnackbar(message) {
    const snackbar = document.createElement('div')
    snackbar.classList.add('snackbar')
    document.querySelector('body').appendChild(snackbar)
    snackbar.textContent = message
    snackbar.classList.add('active')

    setTimeout(() => {
        snackbar.classList.remove('active')
    }, 4000)
}