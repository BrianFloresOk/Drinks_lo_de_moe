export function getTotalPriceItems(cartItems) {
    return cartItems.map(item => item.price * item.quantity)
}