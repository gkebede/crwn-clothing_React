export const addItemToCart = (cartItems, catItemToAdd) => {

    // if(cartItems.length === newCartItems.length){ return; }
    // return {...cartItems, newCartItems}

    const existingCartItem = cartItems.find(cartItem => cartItem.id === catItemToAdd.id);

    if(existingCartItem)  {

        return cartItems.map(cartItem => {

            return cartItem.id === catItemToAdd.id ? {

                ...cartItem, quantity: cartItem.quantity + 1
            } : cartItem

        })
    }

    return [...cartItems, {...catItemToAdd, quantity: 1}]
}