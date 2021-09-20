
import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';

// passing the js object that is why we pass {togglCartHiddenChanges} 
// instead of togglCartHiddenChanges
const CartIcon = ({togglCartHiddenChanges})  => {

    return (
    <div className="cart-icon" onClick={togglCartHiddenChanges}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span> 
    </div>

    )
}

const mapDispatchToProps = dispatch => ({
    togglCartHiddenChanges : () =>  dispatch(toggleCartHidden())
})


export default connect(null,mapDispatchToProps)(CartIcon);