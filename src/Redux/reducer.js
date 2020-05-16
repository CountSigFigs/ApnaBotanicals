import {DISPLAY} from '../shared/productDisplay';
import { POWDERS } from '../shared/powders';
import {CAPSULES} from '../shared/products';
import ACTIONS from './actions';

export const initialState = {
    display: DISPLAY,
    powders: POWDERS,
    capsules: CAPSULES,
    cart: []
}

export const Reducer = (state= initialState, action) => {

    switch(action.type){

        case ACTIONS.Types.ADD_ITEM: {

            let item= action.payload;
            //checks to see if item is already in cart
            if (state.cart.includes(item)){

                let newCart = [...state.cart]
                let index = newCart.indexOf(item)
                newCart.splice(index, 1)
    
                let newQuanity= item.quanity+=1;
                item.quanity= newQuanity
                newCart.push(item)  
                return {
                    ...state, cart: newCart
                }
            } else {
            //adds item to cart if not there already 
            let newCart = [...state.cart]
            item.key = newCart.length;
            newCart.push(item)
            return {
                ...state,
                cart:newCart
                }
            }
        }

        case ACTIONS.Types.DELETE_ITEM: {
            //deletes item from cart
            let item = action.payload;
            let newCart = [...state.cart];
            let index = newCart.indexOf(item)
            newCart.splice(index, 1)
            return {
                ...state,
                cart: newCart
            }
        }
        case ACTIONS.Types.RESET_CART: {
            let newCart = [ ];
            return {
                ...state,
                cart: newCart
            }
        }
        default: return state
    }
    
}

