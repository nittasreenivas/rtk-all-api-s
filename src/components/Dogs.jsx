import React from 'react'
import { useGetAllDogsQuery } from '../services/dogApi'
import { Link } from 'react-router-dom'
function Dogs() {
    var {isLoading,data} =   useGetAllDogsQuery()
    console.log("data::",data,isLoading)
  return (
    <div  className='border border-2 border-info m-2 p-2'>
        <h3  className='text-center'>Dogs</h3>
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
                                <div className="card p-2 m-3 " style={{width:"15rem"}} key={i}>
                                    <Link to={`/dog/${d.name}`}>
                                <img src={d.image.url} className="card-img-top img-fluid " alt="..."/>
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

export default Dogs