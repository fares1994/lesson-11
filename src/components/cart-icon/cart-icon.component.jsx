import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as Logo} from '../../assets/shopping-bag.svg';
import { toggleCartIcon } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggle,totalItems}) =>(
 <div className='cart-icon' onClick={toggle}>
     <Logo className='shopping-icon'/>
     <span className='item-count'>{totalItems}</span>
 </div>
)
const mapDispatchToProps = dispatch =>({
    toggle: ()=>dispatch(toggleCartIcon())
  })
const mapStateToProps = (state) =>{
  return({
  totalItems: selectCartItemsCount(state)
})}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);