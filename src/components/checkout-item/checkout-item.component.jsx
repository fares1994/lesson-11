import React from 'react';
import './checkout-item.styles.scss'; 
import {connect} from 'react-redux';

import { clearItems,addItem,removeItem } from '../../redux/cart/cart.action';

const CheckOutItem = ({item,clearItems,addItem,removeItem}) => {
    const {name,quantity,price,imageUrl} = item
    return(
    <div className='checkout-item'>
        <div className='image-container'>
         <img src={imageUrl} alt='item'/>  
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={()=>removeItem(item)}>&#10094;</div>
            {quantity}
            <div className='arrow' onClick={()=>addItem(item)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={()=>clearItems(item)}>&#10005;</span>
    </div>
)}
const mapDispatchToProps = dispatch =>({
   clearItems: item=>dispatch(clearItems(item)),
   addItem: item=>dispatch(addItem(item)),
   removeItem: item=>dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem);
//the action is recieved
//the function in the utils works
//