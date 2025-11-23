let purchaseButton = document.getElementById('purchase-button');
let errorMessage = document.getElementById('error');

purchaseButton.addEventListener('click', function() {
    errorMessage.textContent = 'Something went wrong, please try again later!'
})