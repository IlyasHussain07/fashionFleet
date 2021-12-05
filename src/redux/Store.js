import { createStore } from 'redux';

let initalState = {
    user: null,
    cartBasket: [],
    wishListBasket: []
}

function reducers(state = initalState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cartBasket: [...state.cartBasket, action.items] }
        case "GetUser":
            return { ...state, user: action.user }
        default:
            return state;
    }
}
const store = createStore(reducers);

export default store;