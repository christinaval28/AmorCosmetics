// Total amount of Lipsticks
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


















































function updatetotalItems() {
    // Grab total amount output 
    let totalItemsOutput = document.getElementById('totalItems')
    // Number of lipsticks + ...item2 + ...item3
    totalItemsOutput.innerText = NumberOfLipsticks
}

function updateTotalPrice() {
    // Grab total amount Price 
    let totalPriceOutput = document.getElementById('totalPrice')
    // (NumofLipstick * NumOfLipstickPrice) + (...item2Total * ...item2Price) + (...item3Total + ...item3Price))
    totalPriceOutput.innerText = (NumberOfLipsticks * LipStickPrice)
}