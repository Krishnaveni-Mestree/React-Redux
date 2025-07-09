import React from "react";
import { connect } from "react-redux";
import {orderBurger} from '../redux/burger/BurgerActions.js'


function BurgerBox(props){
    console.log(props)
    return(
        <div className='container'>
            <h2 className="text">Number of Burger Buns available - {props.burgerBuns}</h2>
            <button className="btn" onClick={props.orderBurger}>Order Burger</button>
        </div>
    );
};

//1.we got access to our redux state
const mapStateToProps=(state)=>{
    return{
        burgerBuns:state.burger.burgerBuns //this prop will pass as prop to the component
    }
}

//2.we got access to dispatch function the action from redux store
const mapDispatchToProps=(dispatch)=>{
    return{
        orderBurger:()=>dispatch(orderBurger()) //once dispatch action, hill be going inside the store
        //this prop will pass as prop to the component
    }
}

//3.connect both functions to our component
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBox);