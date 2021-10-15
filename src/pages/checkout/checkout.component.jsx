import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



import './checkout.style.scss';
import {selectCartItems } from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => (

<div className="checkout-page">

    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>quantity</span>
      </div>

      <div className="header-block">
        <span >Price </span>
      </div>

      <div className="header-block">
        <span >Remove</span>
      </div>
    </div> 
    {
        cartItems.map(cartItem => {
            return <CheckoutItem  key={cartItem.id} cartItem={cartItem}/>
        })

    }


    <div className="total">TOTAL: {`$${total}`} </div>

    <div className='test-warning'>
      <h4> *Please use the following credit cards for payment*</h4> 
     <span>( 4242 4242 4242 4242)***\n
      ( 4000 0025 0000 3155)***
       (4000 0000 0000 9995 ) *** cvv 123
       </span>
    </div>

    <StripeCheckoutButton  price={total} />

</div>



);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total :selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);