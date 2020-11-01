import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import PaymentButton from '../../components/payment-button/payment-button.component';
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
       <div className='test'>Please use the following test credit card for payments<br/>
       4242424242424242-Exp:01/20-CW:123
       </div>
       <PaymentButton price={total}/>
   </div>
)
const mapStateToProps = createStructuredSelector({
    total: selectTotal,
    cartItems:selectCartItems
})
export default connect(mapStateToProps)(CheckOutPage);