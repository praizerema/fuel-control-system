import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import FuelControlReducers from "./reducers/fuelcontrolreducers"

const middleware = [thunk];

export const giveMeStore = () => {
    let store;
    try {
        store = createStore(FuelControlReducers, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
      } catch (error) {
        store = createStore(FuelControlReducers);
      }
    store.subscribe(() => {
        store.getState();
    });


    return store;
};


export default giveMeStore;