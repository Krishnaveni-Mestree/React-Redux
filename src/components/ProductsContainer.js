import React, { useEffect } from 'react'
import { fetchProducts } from '../redux';
import { connect } from 'react-redux';

function ProductsContainer({productsData,fetchProducts}) {
    useEffect(()=>{
        fetchProducts()
    },[]);
  return (
    <div>
      
    </div>
  )
};

const mapStateToProps=state=>{
    return{
       productsData:state.product
    }
};

const mapDispatchToProps=dispatch=>{
    return{
        fetchProducts:()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)
