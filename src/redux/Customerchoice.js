import React, { useState } from "react";
import { connect } from "react-redux";
import {orderBurger} from '../redux/burger/BurgerActions.js'


function Customerchoice(props){
    const [number,setNumber]=useState(1);
    return(
        <div className='container'>
            <h2 className="text">Number of Burger Buns available - {props.burgerBuns}</h2>
            <input 
                type="text" 
                className="input-field" 
                placeholder="Enter your number"
                value={number}
                onChange={e=>setNumber(e.target.value)}
            />
            <button 
                className="customerChoice-btn" 
                onClick={()=>props.orderBurger(number)}
            >
                Order Burger
            </button>
        </div>
    );
};

//1.we got access to our redux state
const mapStateToProps=(state)=>{
    return{
        burgerBuns:state.burger.burgerBuns 
    }
}

//2.we got access to dispatch function the action from redux store
const mapDispatchToProps=(dispatch)=>{
    return{
        orderBurger:(number)=>dispatch(orderBurger(number)) 
    }
}

//3.connect both functions to our component
export default connect(mapStateToProps,mapDispatchToProps)(Customerchoice);