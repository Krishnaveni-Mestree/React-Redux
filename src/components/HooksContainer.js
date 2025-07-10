import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderPizza } from "../redux";


function HooksContainer(props){
    //which will access my pizzaBase available in my redux state
    const pizzaBase=useSelector(state=>state.pizzaBase)  //similar to mapStateToProps
    //dispatch hook will be returning a reference to dispatch function from our redux store
    const dispatch=useDispatch(); //similar to mapDispatchToProps
    console.log(pizzaBase);
    return(
        <div className='container'>
            <h2 className="text">Number of Pizza Base available -{pizzaBase}</h2>
            <button className="btn" onClick={()=>dispatch(OrderPizza())}>Order Pizza</button>
        </div>
    );
};

export default HooksContainer;