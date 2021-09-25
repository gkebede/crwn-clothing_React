import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
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

//#region SOME NOTE
    // ---PLASE READ --
// const mapStateToProps = state => ({
// currentUser: state.user.currentUser
//})

//state  <=> the whole redux store object
//.user  <=> the key of the reducer from the root reducer
//.currentUser <=> the object we want to accesse from the reducer or retrun    OBJECT

   // ------1 -----//

// const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
//     currentUser: currentUser,
//     hidden: hidden
// })

   // ------2 -----//
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

//#endregion SOME NOTE END


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);