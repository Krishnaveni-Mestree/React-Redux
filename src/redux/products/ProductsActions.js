import axios from "axios";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes"

//3 Action creators
export const fetchRequest=()=>{
    return{
        type:FETCH_REQUEST
    };
};
export const fetchSuccess=(products)=>{
    return{
        type:FETCH_SUCCESS,
        payload:products
    };
};
export const fetchError=(err)=>{
    return{
        type:FETCH_ERROR,
        payload:err
    };
};

//for products
export const fetchProducts=()=>{
    return(dispatch)=>{
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            const products=res.data.map(prod=>prod.title);
            //console.log(products)
            dispatch(fetchSuccess(products))
        })
        .catch(err=>{
            const errorMsg=err.message
            dispatch(fetchError(errorMsg));
        })
    }
}