const Types = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    RESET_CART: 'RESET_CART'
};

const addItem = item => ({
    type: Types.ADD_ITEM,
    payload: item
})

const deleteItem= item => ({
    type: Types.DELETE_ITEM,
    payload: item
})

const resetCart= () => ({
    type: Types.RESET_CART
})

export default {addItem, deleteItem, resetCart, Types};

