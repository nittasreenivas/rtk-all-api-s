import React from 'react'
import { useGetAllPlatoProductsQuery } from '../services/platoApi'
import { Link } from 'react-router-dom'
function Plazo() {
    var {isLoading,data} =   useGetAllPlatoProductsQuery()
    console.log("data::",data,isLoading)
  return (
    <div  className='border border-2 border-danger m-2 p-2'>
        <h3>Plazo</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justift-content-around'>
                    {
                        data.map((d,i) => {
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/plato/${d.id}`}>
                                <img src={d.images[0]} className="card-img-top" alt="..."/>
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

export default Plazo