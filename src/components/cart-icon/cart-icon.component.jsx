
import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';


import {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemCount} from '../../redux/cart/cart.selectors';
import './cart-icon.style.scss';

// passing the js object that is why we pass {togglCartHiddenChanges} 
// instead of togglCartHiddenChanges
const CartIcon = ({togglCartHiddenChanges, itemCount})  => {
    return (
    <div className="cart-icon" onClick={togglCartHiddenChanges}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span> 
    </div>

    )
}



const mapStateToProps = (state) => {
    console.log('been called')
    return  {
        itemCount: selectCartItemCount(state)
    } 
    
}



const mapDispatchToProps = dispatch => ({
    togglCartHiddenChanges : () =>  dispatch(toggleCartHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);