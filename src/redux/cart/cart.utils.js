export const addItemToCart =(cartItems,cartItemToAdd) => {
    const exist = cartItems.find(
        cartItem=>cartItem.id === cartItemToAdd.id)
    if(exist) {
         return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id?
            {...cartItem,quantity:cartItem.quantity + 1}:
            cartItem
            )
        }
        else{
        return [...cartItems,{...cartItemToAdd,quantity:1}]
        }
}
export const clearItemsFromCart = (cartItems,itemsToBeCleared) =>{
   return cartItems.filter(item=>
    item.id!==itemsToBeCleared.id
    )
}
// export const removeItem = (cartItems,itemToBeRemoved) =>{
//     if(itemToBeRemoved.quantity===1){
//     return cartItems.filter(item=>
//         item.id!==itemToBeRemoved.id
//         )        
//     }
//     else{
//         return cartItems.map(item=>{
//             if(item.id===itemToBeRemoved.id){
//             item.quantity = item.quantity - 1
//             return item
//             }
//             else{return item}
//         })
//     }
// }
//the removeItem button works well but the count function does not work
export const removeItem = (cartItems,itemToBeRemoved) =>{
    const existingCartItem = cartItems.find(item=>
        item.id===itemToBeRemoved.id)
    if(existingCartItem.quantity===1){
    return cartItems.filter(item=>
        item.id!==itemToBeRemoved.id
        )        
    }
    else{
        return cartItems.map(item=>
          item.id===itemToBeRemoved.id?
          {...item,quantity:item.quantity-1}:
          item
        )
    }
}