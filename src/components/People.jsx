import React from 'react'
import data from "../data.json"

import { Link } from 'react-router-dom'
function People() {
    
  return (
    <div className='border border-2 border-primary m-2 p-2'>
        <h3 className='text-center'>People </h3>
        <div  className='d-flex flex-wrap justify-content-around'>
            {
                data.people.map((people,i) => {
                    return(
                        <div className="card p-2 m-3" style={{width:"15rem"}} key={people.id}>
                                    <Link to={`/people/${people.id}`} state={people}>
                                <img src={people.image} className="card-img-top" alt="..."/>
                                </Link>
                              </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default People