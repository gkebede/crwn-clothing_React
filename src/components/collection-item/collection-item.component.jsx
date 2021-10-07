import React from 'react';
import { connect } from 'react-redux';

import {addItem} from '../../redux/cart/cart.action'
import CustomButton  from '../custom-button/custom-button.component';
import './collection-item.style.scss'

const CollectionItem = ({ item, addItem }) => {

  const {name, price, imageUrl} = item;
          return (
            <div className='collection-item'>
              <div
                className='image'
                style={{
                  backgroundImage: `url(${imageUrl})`
                }}
              />
              <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
              </div>
              <CustomButton onClick={() => addItem(item)} inverted >ADD TO CART</CustomButton>
            </div>
          );
      }

      
<<<<<<< HEAD
  // const mapDispatchToProps = dispatch => ({
=======
  const mapDispatchToProps = dispatch => ({
>>>>>>> a5946c2fc1f0dd71eee4b3232b287e84c221c196

  //    addItem : item => {dispatch(addItem(item))}
  // })
  
  //export default connect(null, mapDispatchToProps) (CollectionItem);
  export default connect(null, {addItem}) (CollectionItem);
