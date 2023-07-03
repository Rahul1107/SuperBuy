export const cartReducer =  (state, action) =>{
    switch(action.type){

        case "ADD_TO_CART":
            return{ ...state, cart:[...state.cart,{...action.payload}]}
            
        case "REMOVE_FROM_CART":
            return{ ...state, cart:state.cart.filter((c)=> c.product.id !== action.payload.product.id)}

        case "ADD_QUANTITY":
            return{ ...state, cart:state.cart.filter((c)=>{ return (c.product.id == action.payload.product.id)?c.quantity = action.payload.quantity+1: c.quantity})}

        case "REMOVE_QUANTITY":
            return{ ...state, cart:state.cart.filter((c)=>{ return (c.product.id == action.payload.product.id && c.quantity>1)?c.quantity = action.payload.quantity-1: c.quantity})}
            

        default: 
            return state;
    }
}