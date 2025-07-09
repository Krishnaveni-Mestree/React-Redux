import React, { useEffect } from 'react'
import { fetchProducts } from '../redux';
import { connect } from 'react-redux';

function ProductsContainer({productsData,fetchProducts}) {
    useEffect(()=>{
        fetchProducts()
    },[]);
  return (
    <div>
      {productsData.loading && <p>Loading....</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && <p>{productsData.products.map(title=><h1>{title}</h1>)}</p>}
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
