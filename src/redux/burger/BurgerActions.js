import { ORDER_BURGER } from "./BurgerTypes";

//Action creators
export function orderBurger(number){
    return{
        type:ORDER_BURGER,
        payload:number
    }
}