import React from 'react'
import { useGetAllRandomPersonsQuery } from '../services/randomApi'
import { Link } from 'react-router-dom'
function RandomUser() {
    var {isLoading,data} =   useGetAllRandomPersonsQuery()
    console.log("data::",data,isLoading)
  return (
    <div >
        <h3 className='text-center'>RandomUser</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.results.map((d,i) => {
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/random/${d.id}`}>
                                <img src={d.picture.large} className="card-img-top" alt="..."/>
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

export default RandomUser