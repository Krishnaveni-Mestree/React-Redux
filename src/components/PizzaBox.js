import React from "react";
import { OrderPizza } from "../redux/index.js";
import { connect } from "react-redux";


function PizzaBox(props){
    console.log(props)
    return(
        <div className='container'>
            <h2 className="text">Number of Pizza Base available - {props.pizzaBase}</h2>
            <button className="btn" onClick={props.orderPizza}>Order Pizza</button>
        </div>
    );
};

//1.we got access to our redux state
const mapStateToProps=(state)=>{
    return{
        pizzaBase:state.pizza.pizzaBase //this prop will pass as prop to the component
    }
}

//2.we got access to dispatch function the action from redux store
const mapDispatchToProps=(dispatch)=>{
    return{
        orderPizza:()=>dispatch(OrderPizza()) //once dispatch action, hill be going inside the store
        //this prop will pass as prop to the component
    }
}

//3.connect both functions to our component
export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox);