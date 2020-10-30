import { createSelector } from 'reselect';
//inputselector
const selectCart = state => state.cart 
//outputselector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accomulate,item) =>accomulate+item.quantity,0)
)
export const selectHidden = createSelector(
    [selectCart],(cart)=>cart.hidden
)
export const selectTotal = createSelector(
    [selectCartItems],(cartItems)=> cartItems.reduce((accomulate,item) =>accomulate+item.quantity*item.price,0)
)
//selectors are memoization (if the value does'nt change the function does'nt rerender)