import React from 'react'
import { useGetAllFakeProductsQuery } from '../services/fakeApi'
import { Link } from 'react-router-dom'
function Fake() {
    var {isLoading,data} =  useGetAllFakeProductsQuery()
    console.log("data::",data,isLoading)
  return (
    <div className='border border-2 border-info m-2 p-2'>
        <h3  className='text-center'>Fake</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.map((d,i) => {
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/fake/${d.id}`}>
                                <img src={d.image} className="card-img-top" alt="..."/>
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

export default Fake