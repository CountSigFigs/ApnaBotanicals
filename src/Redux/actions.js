import * as ActionTypes from './actionTypes';
import baseUrl from '../shared/baseUrl';

export const fetchCapsules = () => dispatch => {
    return fetch(baseUrl + 'capsules')
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response=response;
            throw error;
        }
    },
    error => {
        const errMess= new Error(error.message);
        throw errMess;
    }
    )
    .then(response => console.log(response))
    .then(response => dispatch(addCapsules(response)))
    .catch(error => dispatch(capsulesFailed(error.message)));
};

export const addCapsules = capsules => ({
    type: ActionTypes.ADD_CAPSULES,
    payload: capsules
});

export const capsulesLoading = () => ({
    type: ActionTypes.CAPSULES_LOADING
});

export const capsulesFailed = errMess => ({
    type: ActionTypes.CAPSULES_FAILED,
    payload: errMess
});

export const addItem = item => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
});

export const deleteItem = item => ({
    type: ActionTypes.DELETE_ITEM,
    payload: item
});

export const resetCart = () => ({
    type: ActionTypes.RESET_CART
});


