import React from 'react'
import { useGetAllDummyProductsQuery } from '../services/dummyApi'
import { Link } from 'react-router-dom'
function Products() {
  var {isLoading,data} =   useGetAllDummyProductsQuery();
  console.log("data::",data,isLoading)
  return (
    <div  className='border border-2 border-primary m-2 p-2'>
        <h3 className='text-center'>Products</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.products.map((d,i) => {
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/products/${d.id}`}>
                                <img src={d.thumbnail} className="card-img-top" alt="..."/>
                                </Link>
                              </div>
                            )
                        })
                    }
                    </div>
            )
        }
    </div>
  )
}

export default Products