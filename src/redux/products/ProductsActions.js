import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes"

//3 Action creators
const fetchRequest=()=>{
    return{
        type:FETCH_REQUEST
    };
};
const fetchSuccess=(products)=>{
    return{
        type:FETCH_SUCCESS,
        payload:products
    };
};
const fetchError=(err)=>{
    return{
        type:FETCH_ERROR,
        payload:err
    };
};