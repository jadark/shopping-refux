import { createStore, applyMiddleware } from "redux";
import thunk  from "redux-thunk";

const reducer = (state, action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        return {
            ...state,
            products: action.products
        }
    } else if (action.type === "SEARCH_LIST") {
        // console.log(action.value, state.products);
        console.log(action.value), "valor entrante";
        var result = state.products.filter(value => value.name.toLowerCase().includes(action.value.toLowerCase()));
        // console.log('resultados', result)
        return {
            ...state,
            products: result,
            term: action.value
        }
    } else if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    } else if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        }
    }
    return state;
};

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }

export default createStore(reducer, { cart:[], products: [], productsList: [], term:"" }, applyMiddleware(logger, thunk));