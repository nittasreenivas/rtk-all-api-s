import React from 'react'
import { useGetAllShipsQuery } from '../services/shipApi'
import { Link } from 'react-router-dom'
function Ships() {
    var {isLoading,data} =  useGetAllShipsQuery()
    console.log("data::",data,isLoading)
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h3 className='text-center'>Ships</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.map((d,i) => {
                            if (!d.image) {
                                return null; 
                              }
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                   <Link to={`/ships/${d.id}`}>
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

export default Ships