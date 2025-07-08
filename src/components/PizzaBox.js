import React from "react";

function PizzaBox(){
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

export default PizzaBox;