import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducer";
import burgerReducer from "./burger/BurgerReducer";
import productsReducer from "./products/ProductsReducer";

const rootReducer=combineReducers({
    pizza:pizzaReducer,
    burger:burgerReducer,
    products:productsReducer
});

export default rootReducer;