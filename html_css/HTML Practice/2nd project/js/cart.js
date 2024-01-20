const CartItems = document.querySelector('.cart-items');

function displayCartItems () {
    const items = JSON.parse(localStorage.getItem('cart'));
    items.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span class="cart-item-id">${item.id}</span>
            <span class="cart-item-title">${item.title}</span>
            <img src="${item.image}" alt="" class="cart-img">
            <div class="cart-item-price">$${item.price}</div>
            <p class="cart-item-delete">Delete</p>
        `;
        CartItems.appendChild(cartItem);
    });
}

displayCartItems();