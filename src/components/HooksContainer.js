import React from "react";
import { useSelector } from "react-redux";


function HooksContainer(props){
    //which will access my pizzaBase available in my redux state
    const pizzaBase=useSelector(state=>state.pizzaBase)  //similar to mapStateToProps
    console.log(pizzaBase)
    return(
        <div className='container'>
            <h2 className="text">Number of Pizza Base available -{pizzaBase}</h2>
            <button className="btn">Order Pizza</button>
        </div>
    );
};

export default HooksContainer;