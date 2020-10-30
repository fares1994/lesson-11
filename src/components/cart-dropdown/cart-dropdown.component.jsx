import React from 'react';
import CartItem from '../cart-component/cart-item.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartIcon } from '../../redux/cart/cart.action';
const CartDropDown = ({cartItems,history,dispatch}) =>{
  return(
  <div className='cart-dropdown' >
{   cartItems.length?
   <div className='cart-items'>
    {
      cartItems.map(item=>
       <CartItem key={item.id} item={item}/>
      )
    }
    </div>:
    <span className='empty'>The card is empty</span>
    }
    <CustomButton className='button' onClick={()=>{
      dispatch (toggleCartIcon())
      history.push('/checkout')}}>
      CHECK OUT</CustomButton>
  </div>
)}
const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropDown));
//shorthand dispatch( without mapDispatchToProps) the dispatch method is passed to 
// the component when using the higher order function connect 