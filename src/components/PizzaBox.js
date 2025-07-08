import React from "react";
import { OrderPizza } from "../redux/index.js";

function PizzaBox(props){
    console.log(props)
    return(
        <div className='container'>
            <h2 className="text">Number of Pizza Base available - 100</h2>
            <button className="btn">Order Pizza</button>
        </div>
    );
};

//1.we got access to our redux state
const mapStateToProps=(state)=>{
    return{
        pizzaBase:state.pizzaBase
    }
}

//2.we got access to dispatching the action from redux store
const mapDispatchToProps=(dispatch)=>{
    return{
        orderPizza:()=>dispatch(OrderPizza())
    }
}

export default PizzaBox;