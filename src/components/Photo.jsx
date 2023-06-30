import React from 'react'
import { useGetAllPhotosQuery } from '../services/photoApi'
import { Link } from 'react-router-dom'
function Photo() {
    var {isLoading,data} = useGetAllPhotosQuery()
    console.log("data::",data)
    const slicedData = data ? data.slice(0, 100) : [];
  return (
    <div className='border border-2 border-primary m-2 p-2'>
        <h3 className='text-center'>Photo</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justift-content-around'>
                    {
                        slicedData.map((d,i) => {
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/photo/${d.id}`}>
                                <img src={d.thumbnailUrl} className="card-img-top" alt="..."/>
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

export default Photo