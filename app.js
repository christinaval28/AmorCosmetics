let NumberOfLipsticks = 0;
// Price of Lipstick
let LipStickPrice = 9.99;
// Inital total item in cart 
let totalItemsOutput = 0





// Grab ID InputGroup for Lipstick
let LipStickContainer = document.getElementById('rubyRedInput');
// Grab Addition Button for Lipstick
let addLipstick = LipStickContainer.getElementsByClassName('additionButton')[0];
// Grab Output button for Lipstick
let viewCountLipstick = LipStickContainer.getElementsByClassName('viewOuput')[0]
// Grab Subtraction button for Lipstick
let subtractLipstick = LipStickContainer.getElementsByClassName('subtractionButton')[0];
// Grab Lipstick 'add to cart' Button'
let LipstickCardButton = document.getElementById('rubyRedCardButton');


// Add Items with Input Button
addLipstick.addEventListener('click', () => {
    // Add 1 to total lipstick
    NumberOfLipsticks += 1;
    // Output Updated Value
    viewCountLipstick.innerText = NumberOfLipsticks;

    // Update Total Amount of items
    updatetotalItems()
    // Update Total Price of items
    updateTotalPrice()
})

// Add items with card button
LipstickCardButton.addEventListener('click', () => {
    // Add 1 to total lipstick
    NumberOfLipsticks += 1;
    // Output Updated Value
    viewCountLipstick.innerText = NumberOfLipsticks;

    // Update Total Amount of items
    updatetotalItems()
    // Update Total Price of items
    updateTotalPrice()
})

// Remove Items with Input Button
subtractLipstick.addEventListener('click', () => {
    // If item is not zero , do nothing
    if (NumberOfLipsticks != 0) {
        NumberOfLipsticks -= 1;
    }
    // Update output
    viewCountLipstick.innerText = NumberOfLipsticks

    // Update total items
    updatetotalItems()

    // Update Total price
    updateTotalPrice()
})

// Total amount of Mascasas
let NumberOfMascaras = 0;
// Price of Mascara
let MascaraPrice = 19.99;
// Inital total item in cart 
let totalItemsOut = 0

// Grab ID InputGroup for Mascara
let Mascara = document.getElementById('DarkChocolateInput');
// Grab Addition Button for Mascara
let addMascara = Mascara.getElementsByClassName('additionButton')[0];
// Grab Output button for Mascara
let viewCountMascara = Mascara.getElementsByClassName('viewOuput')[0]
// Grab Subtraction button for Mascara
let subtractMascara = Mascara.getElementsByClassName('subtractionButton')[0];
// Grab Mascara 'add to cart' Button'
let MascaraCardButton = document.getElementById('DarkChocolateMascaraCardButton');

// Add Items with Input Button
addMascara.addEventListener('click', () => {
    // Add 1 to total mascara
    NumberOfMascaras += 1;
    // Output Updated Value
    viewCountMascara.innerText = NumberOfMascaras;
    // Update Total Amount of items
    updatetotalItems()
    // Update Total Price of items
    updateTotalPrice()
})

// Add items with card button
MascaraCardButton.addEventListener('click', () => {
    // Add 1 to total lipstick
    NumberOfMascaras += 1;
    // Output Updated Value
    viewCountMascara.innerText = NumberOfMascaras;

    // Update Total Amount of items
    updatetotalItems()
    // Update Total Price of items
    updateTotalPrice()
})

// Remove Items with Input Button
subtractMascara.addEventListener('click', () => {
    // If item is not zero , do nothing
    if (NumberOfMascaras != 0) {
        NumberOfMascaras -= 1;
    }
    // Update output
    viewCountMascara.innerText = NumberOfMascaras

    // Update total items
    updatetotalItems()

    // Update Total price
    updateTotalPrice()
})


// Total amount of Concealers
let NumberOfConcealers = 0;
// Price of Concealer
let ConcealerPrice = 24.99;
// Inital total item in cart 
let totalItemsOutputt = 0

// Grab ID InputGroup for Concealer
let Concealer = document.getElementById('Concealer1Input');
// Grab Addition Button for Concealer
let addConcealer = Concealer.getElementsByClassName('additionButton')[0];
// Grab Output button for Concealer
let viewCountConcealer = Concealer.getElementsByClassName('viewOuput')[0]
// Grab Subtraction button for Concealer
let subtractConcealer = Concealer.getElementsByClassName('subtractionButton')[0];
// Grab Mascara 'add to cart' Concealer
let ConcealerCardButton = document.getElementById('Concealer1CardButton');

// Add Items with Input Button
addConcealer.addEventListener('click', () => {
    // Add 1 to total mascara
    NumberOfConcealers += 1;
    // Output Updated Value
    viewCountConcealer.innerText = NumberOfConcealers;
    // Update Total Amount of items
    updatetotalItems()
    // Update Total Price of items
    updateTotalPrice()
})

// Add items with card button
ConcealerCardButton.addEventListener('click', () => {
    // Add 1 to total concealer
    NumberOfConcealers += 1;
    // Output Updated Value
    viewCountConcealer.innerText = NumberOfConcealers;

    // Update Total Amount of items
    updatetotalItems()
    // Update Total Price of items
    updateTotalPrice()
})

// Remove Items with Input Button
subtractConcealer.addEventListener('click', () => {
    // If item is not zero , do nothing
    if (NumberOfConcealers != 0) {
        NumberOfConcealers -= 1;
    }
    // Update output
    viewCountConcealer.innerText = NumberOfConcealers

    // Update total items
    updatetotalItems()

    // Update Total price
    updateTotalPrice()
})






































// Set a timout and do something after five seconds 
const myTimeout = setTimeout(emailPopup, 5000);

function emailPopup() {
    document.getElementById("demo").innerHTML = "I am an email popup!"

}







function updatetotalItems() {
    // Grab total amount output 
    let totalItemsOutput = document.getElementById('totalItems')
    // Number of lipsticks + ...item2 + ...item3
    totalItemsOutput.innerText = NumberOfLipsticks + NumberOfMascaras + NumberOfConcealers
}

function updateTotalPrice() {
    // Grab total amount Price 
    let totalPriceOutput = document.getElementById('totalPrice')
    // (NumofLipstick * NumOfLipstickPrice) + (...item2Total * ...item2Price) + (...item3Total + ...item3Price))
    totalPriceOutput.innerText = ((NumberOfLipsticks * LipStickPrice) + (NumberOfMascaras * MascaraPrice) + (NumberOfConcealers * ConcealerPrice)).toFixed(3)
}
