import {cartType} from './cart.type';
export const  toggleCartIcon = () =>({
    type:cartType.TOGGLE_CART_ICON
})
export const addItem = item =>({
    type:cartType.ADD_ITEM,
    payload:item
})
export const clearItems = item =>({
    type:cartType.CLEAR_ITEMS,
    payload:item
})
export const removeItem = item =>({
    type:cartType.REMOVE_ITEM,
    payload:item
})
