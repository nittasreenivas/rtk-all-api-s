import React from 'react'
import { useGetAllRocketsQuery } from '../services/rocketApi'
import { Link } from 'react-router-dom'
function Rockets() {
    var {isLoading,data} =  useGetAllRocketsQuery()
    console.log("data::",data,isLoading)
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h3 className='text-center'>Rockets</h3>
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
                                    <Link to={`/rockets/${d.id}`}>
                                <img src={d.flickr_images[1]} className="card-img-top" alt="..."/>
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

export default Rockets