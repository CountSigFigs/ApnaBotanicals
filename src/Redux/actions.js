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

export const fetchContacts = () => dispatch => {
    return fetch(baseUrl + 'contact')
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
    .then(response => dispatch(addContacts(response)))
    .catch(error => console.log(error));
};

export const fetchReviews = () => dispatch => {
    return fetch(baseUrl + 'reviews')
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
    .then(response => dispatch(addReviews(response)))
    .catch(error => console.log(error));
};

export const postContact= (name, phone, email, feedback) => dispatch => {
    const newContact= {
        name:name,
        phone:phone,
        email:email,
        feedback:feedback
    }

    return fetch(baseUrl + 'contact', {
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
    .then(response => dispatch(addContact(response)))
    .catch(error => {
        console.log('post contact', error.message);
        alert('Your message could not be posted\nError: ' + error.message);
    });
};

export const postReview= (title, name, feedback) => dispatch => {

    const newReview= {
        title,
        name,
        feedback
    }

    return fetch(baseUrl + 'reviews', {
        method: "POST",
        body: JSON.stringify(newReview),
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
    .then(response => dispatch(addReview(response)))
    .catch(error => {
        console.log('post contact', error.message);
        alert('Your message could not be posted\nError: ' + error.message);
    });
};

export const addReview = review => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const addContact = contact => ({
    type: ActionTypes.ADD_CONTACT,
    payload: contact
});

export const addContacts = contacts => ({
    type: ActionTypes.ADD_CONTACTS,
    payload: contacts
});

export const addPowders = powders => ({
    type: ActionTypes.ADD_POWDERS,
    payload: powders
});

export const powdersFailed = errMess => ({
    type: ActionTypes.POWDERS_FAILED,
    payload: errMess
})

export const powdersLoading = () => ({
    type: ActionTypes.POWDERS_FAILED
})

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



