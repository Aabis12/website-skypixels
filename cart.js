// Function to render cart items dynamically
function renderCart() {
    const cartTable = document.getElementById("cart-items");
    const emptyMessage = document.getElementById("empty-cart-message");
    const totalPriceElement = document.getElementById("total-price");

    cartTable.innerHTML = ""; // Clear existing items
    let totalPrice = 0;

    if (cartItems.length === 0) {
        emptyMessage.style.display = "block";
        totalPriceElement.textContent = "₹0.00";
        return;
    } else {
        emptyMessage.style.display = "none";
    }

    // Loop through each cart item and create table rows
    cartItems.forEach((item, index) => {
        const total = item.price * item.quantity;
        totalPrice += total;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" class="quantity" data-index="${index}">
            </td>
            <td>₹${total.toFixed(2)}</td>
            <td><button class="remove-btn" data-index="${index}"><i class="fa-solid fa-trash"></i> Remove</button></td>
        `;
        cartTable.appendChild(row);
    });

    // Update total price at the bottom
    totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;

    // Add event listeners for quantity change and remove buttons
    document.querySelectorAll(".quantity").forEach((input) => {
        input.addEventListener("change", updateQuantity);
    });

    document.querySelectorAll(".remove-btn").forEach((button) => {
        button.addEventListener("click", removeItem);
    });
}
