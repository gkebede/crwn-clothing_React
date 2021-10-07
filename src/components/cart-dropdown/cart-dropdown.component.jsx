import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import CustomButton  from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
<<<<<<< HEAD
// import {selectCartHidden} from '../../redux/cart/cart.selectors';
=======
import {selectCartHidden} from '../../redux/cart/cart.selectors';
>>>>>>> a5946c2fc1f0dd71eee4b3232b287e84c221c196
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-dropdown.style.scss';

//const CartDropdown = ({cartItems}) => {
function CartDropdown({cartItems, history, dispatch}){

    return (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
             cartItems.length ? (
                cartItems.map (cartItem =>{
                return  <CartItem key={cartItem.id} item={cartItem} />

                })) : (

                    <span className="empty-message">Your cart is empty</span>
                )
                
            }
        
        </div>
        <CustomButton onClick={() =>
            {
                history.push('/checkout');
                dispatch(toggleCartHidden());
               // toggleCartHidden();
        }
        }> GO TO CHECKOUT</CustomButton>
    </div>
    )
}



const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems

});

 

// const mapStateToProps = ({cart: {cartItems}}) => {
//     return {cartItems} 
// }

// const mapStateToProps = (state) => {
//     return {cartItems: state.cart.cartItems}
// }

 export default  withRouter(connect(mapStateToProps)(CartDropdown));