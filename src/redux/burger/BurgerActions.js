import { ORDER_BURGER } from "./BurgerTypes";

//Action creators
export function orderBurger(number=1){
    return{
        type:ORDER_BURGER,
        payload:number
    }
}