import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutItem, { } from '../../components/checkout-item/checkout-item.component';
const CheckOutPage = ({total,cartItems}) =>(
   <div className='checkout-page'>
       <div className='checkout-header'>
           <div className='header-block'>
            Product
           </div>
           <div className='header-block'>
            Description
            </div>
            <div className='header-block'>
            Quantity
            </div>
            <div className='header-block'>
            Price
            </div>
            <div className='header-block'>
            Remove
            </div>
       </div>
       {
           cartItems.map(item=>
           <CheckOutItem key={item.id} item={item}/>)
       }
       
       <div className='total'>${total}</div>
   </div>
)
const mapStateToProps = createStructuredSelector({
    total: selectTotal,
    cartItems:selectCartItems
})
export default connect(mapStateToProps)(CheckOutPage);