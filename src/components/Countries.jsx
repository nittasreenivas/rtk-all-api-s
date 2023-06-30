import React from 'react'
import { useGetAllCountryDetailsQuery } from '../services/countryApi'
import { Link } from 'react-router-dom'
function Countries() {
    var {isLoading,data} =  useGetAllCountryDetailsQuery()
    console.log("data::",data,isLoading)
  return (
    <div className='border border-2 border-info m-2 p-2'>
        <h3  className='text-center'>Countries</h3>
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
                                    <Link to={`/country/${d.name.common}`}>
                                <img src={d.flags[1]} className="card-img-top" alt="..."/>
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

export default Countries