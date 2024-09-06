document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    let bookingFormDiv = document.getElementById('booking-form');

    function updateCartDisplay() {
        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p style="font-size:22px; display:flex;justify-content:center;">No orders were placed!!</p>';
            return;
        }

        cartItemsDiv.innerHTML = '';
        cart.forEach((item, index) => {
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Price: Rs. ${item.price}</p>
                        <p>Rating: ${item.rating}/5</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="deleteCartItem(${index})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
    }

    function calculateTotalAmount() {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    document.getElementById('confirm-booking').addEventListener('click', () => {
        let totalAmount = calculateTotalAmount();
        bookingFormDiv.innerHTML = `
            <h2>Confirm Booking</h2>
            <form id="booking-form-element">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required><br>
                <label for="address">Delivery Address:</label>
                <textarea id="address" name="address" required></textarea><br>
                <h3>Order Details:</h3>
                <div id="order-details"></div>
                <p>Total Amount: Rs. ${totalAmount}</p>
                <button type="submit">Submit</button>
            </form>
        `;

        let orderDetailsDiv = document.getElementById('order-details');
        cart.forEach(item => {
            orderDetailsDiv.innerHTML += `
                <div class="order-item">
                    <p>Name: ${item.name}</p>
                    <p>Price: Rs. ${item.price}</p>
                    <p>Rating: ${item.rating}/5</p>
                </div>
            `;
        });

        document.getElementById('booking-form-element').addEventListener('submit', (e) => {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let phone = document.getElementById('phone').value;
            let address = document.getElementById('address').value;
            alert(`Booking confirmed!\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nTotal Amount: Rs. ${totalAmount}`);
            // Add your form submission logic here, like sending data to the server
        });
    });

    // Call this function to display the cart items when the page loads
    updateCartDisplay();
});
