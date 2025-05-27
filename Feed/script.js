document.getElementById('donationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const donorName = document.getElementById('donorName').value;
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;
    const expiryTime = document.getElementById('expiryTime').value;
    const location = document.getElementById('location').value;

    alert(`Thank you, ${donorName}! Your donation has been recorded:
    - Food Type: ${foodType}
    - Quantity: ${quantity} portions
    - Description: ${description}
    - Expiry/Pickup Time: ${expiryTime}
    - Location: ${location}`);
    
    // Reset the form
    this.reset();
});
