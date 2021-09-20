import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';

//  {currentUser} = this.props;
const Header = ({currentUser,  hidden}) => {

    return (
    <div className='header'>
        
        <Link to='/' className='logo-container'>
        <Logo  className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/contact' className='option'>
                CONTACT
            </Link>

            {currentUser ? ( 
              <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
              ):(
                              <Link className="option" to="/signin">
                                  Sign In
                                  </Link>
                         
         )}
         
        <CartIcon/>

        </div>
            {
                hidden? null : <CartDropdown/>
                
            }
       </div>
    );
}

    // ---PLASE READ --
// const mapStateToProps = state => ({
// currentUser: state.user.currentUser
//})

//state  <=> the whole redux store object
//.user  <=> the key of the reducer from the root reducer
//.currentUser <=> the object we want to accesse from the reducer or retrun    OBJECT


const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden
})


export default connect(mapStateToProps)(Header);