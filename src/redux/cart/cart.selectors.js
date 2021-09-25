import { createSelector } from "reselect";


// there are input and out put selector

// 3 from the bottom up  3,2,1  cart
const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

// 2
export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => (cart.cartItems)
)



// 1
export const selectCartItemCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((acc, cartItem) =>{
        return acc + cartItem.quantity;
        
    }, 0 )
);

export const selectCartTotal = createSelector(
    [selectCartItems],

        cartItems => cartItems.reduce((acc, cartItem) =>{
            return acc + (cartItem.quantity * cartItem.price );
            
        }, 0 )
);
