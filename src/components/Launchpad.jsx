import React from 'react'
import { useGetAllLaunchepadsQuery } from '../services/launchpadApi'
import { Link } from 'react-router-dom'
function Launchpad() {
    var {isLoading,data} =  useGetAllLaunchepadsQuery()
    console.log("data::",data)
  return (
    <div  className='border border-2 border-danger m-2 p-2'>
        <h3 className='text-center'>Launchpad</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.map((d,i) => {
                            // if (!d.links.patch.small) {
                            //     return null; 
                            //   }
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/launchpad/${d.id}`}>
                                <img src={d.images.large} className="card-img-top" alt="..."/>
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

export default Launchpad