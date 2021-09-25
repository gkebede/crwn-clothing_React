export const addItemToCart = (cartItems, catItemToAdd) => {

    // if(cartItems.length === newCartItems.length){ return; }
    // return {...cartItems, newCartItems}

    const existingCartItem = cartItems.find(cartItem => cartItem.id === catItemToAdd.id);

    if(existingCartItem)  {

        return cartItems.map(cartItem => {
                // if (cartItem.id === catItemToAdd.id) {return //...} else{cartItem}
            return cartItem.id === catItemToAdd.id ? {
                ...cartItem, quantity: cartItem.quantity + 1
            } : cartItem

        })
    }

    return [...cartItems, {...catItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    // if the item is equal to 1 remove it  (1 and 2 read them together)
    if(existingCartItem.quantity === 1) {

        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

     // other wise reduce it as much as you want  (2)
    return cartItems.map(cartItem =>{
        return cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1}
                                                   :cartItem
    })
}