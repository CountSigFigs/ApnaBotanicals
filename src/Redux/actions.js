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

export const fetchPowders = () => dispatch => {
    return fetch(baseUrl + 'powders')
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
    .then(response => dispatch(addPowders(response)))
    .catch(error => dispatch(powdersFailed(error.message)));
};

export const addPowders = powders => ({
    type: ActionTypes.ADD_POWDERS,
    payload: powders
});

export const powdersLoading = () => ({
    type: ActionTypes.POWDERS_LOADING
});

export const powdersFailed = errMess => ({
    type: ActionTypes.POWDERS_FAILED,
    payload: errMess
});

export const postComment= (name, phone, email, feedback) => dispatch => {
   
    const newContact= {
        name,
        phone,
        email,
        feedback
    }

    //newContact.date = new Date ().toISOString();

    return fetch(baseUrl + 'contacts', {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok){
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response=response;
            throw error;
        }
    },
    error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log('post comment', error.message);
       // alert('Your comment could not be posted\nError: ' + error.message);
    });
};

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
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



