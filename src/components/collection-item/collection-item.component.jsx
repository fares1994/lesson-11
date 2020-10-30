import React from 'react';
import  CustomButton  from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

import { addItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CollectionItem = ({ item,addItem }) => {
  const {name,price,imageUrl} = item
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <CustomButton className='custom-button'
     onClick={()=>addItem(item)}
     isInverted>
      ADD TO CART </CustomButton>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);}
const mapdispatchToProps = dispatch =>({
  addItem: item =>dispatch(addItem(item))
})

export default connect(null,mapdispatchToProps)(CollectionItem);
