import {cartType} from './cart.type';
import { addItemToCart, clearItemsFromCart,removeItem } from './cart.utils';
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case cartType.TOGGLE_CART_ICON:
            return {
                ...state,
                hidden:!state.hidden
            }
        case cartType.ADD_ITEM:
       return {
           ...state,
           cartItems:addItemToCart(state.cartItems,action.payload)
        }
        case cartType.CLEAR_ITEMS:
            return {
                ...state,
                cartItems: clearItemsFromCart(state.cartItems,action.payload)
            }
        case cartType.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItem(state.cartItems,action.payload)
            }
        default:
            return state
    }
}
export default cartReducer;