export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    // remove if the quantity = 1
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) 
    }
    // decrease the quantity by 1  
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    );
};

// addItemToCart takes 2 arguments: the existing item in carts and the item to add
// We'll check if the cart item to add already exist.
// If the cart to add exist, then we'll create a new cart item and increase the quantity by one
// if the item doesn't match we'll return the original cart item.
// if the cart item is not found in the array then we'll return a new array with all of the existing cart item 