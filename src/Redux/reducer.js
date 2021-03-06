import {DISPLAY} from '../shared/productDisplay';
import { POWDERS } from '../shared/powders';
import * as ActionTypes from './actionTypes';

export const initialState = {
    capsules: [],
    display: DISPLAY,
    powders: POWDERS,
    cart: [],
    comment:{}
}

export const Reducer = (state = initialState, action) => {

    switch(action.type){

        case ActionTypes.ADD_CAPSULES:
            return {...state, capsules: action.payload }

        case ActionTypes.CAPSULES_LOADING:
            return {...state, capsules:{isLoading: true, errMess: null, capules:[]}};

        case ActionTypes.CAPSULES_FAILED:
            return {...state, capsules:{isLoading: false, errMess: action.payload}}

        case ActionTypes.ADD_POWDERS:
                return {...state, powders: action.payload }
    
        case ActionTypes.POWDERS_LOADING:
                return {...state, powders:{isLoading: true, errMess: null, powders:[]}};
    
        case ActionTypes.POWDERS_FAILED:
                return {...state, powders:{isLoading: false, errMess: action.payload}};

        case ActionTypes.ADD_COMMENT:
                const newComment = action.payload;
                return {...state, comment: newComment};

        case ActionTypes.ADD_ITEM: {

            let item= action.payload;
            //checks to see if item is already in cart
            if (state.cart.includes(item)){

                item.quanity+=1;
                return{
                    ...state,
                    cart:[...state.cart]
                }
            } else {
            //adds item to cart if not there already 
            let newCart = [...state.cart]
            item.key = newCart.length;
            item.quanity = 1;
            newCart.push(item)
            return {
                ...state,
                cart:newCart
                }
            }
        }

        case ActionTypes.DELETE_ITEM: {
            //deletes item from cart
            let item = action.payload;

            if (item.quanity > 1){
                item.quanity-=1;
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                let newCart = [...state.cart]
                let index = newCart.indexOf(item)
                newCart.splice(index, 1)

                return {
                    ...state,
                    cart:newCart
                }
            }
        }
        
        case ActionTypes.RESET_CART: {
            let newCart = [ ];
            return {
                ...state,
                cart: newCart
            }
        }
        default: return state
    }
}

