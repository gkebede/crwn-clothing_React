import { createSelector } from "reselect";

// 3 from the bottom up  3,2,1
const selectCart = state => state.cart;

// 2
export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems
)

// 1
export const selectCartItemCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((acc, cartItem) =>{
        return acc + cartItem.quantity;
    }, 0 )
);