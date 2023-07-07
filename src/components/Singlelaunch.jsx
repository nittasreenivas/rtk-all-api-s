import React from 'react'
import { useGetSingleLaunchQuery } from '../services/launchApi'
import { useParams ,useNavigate} from 'react-router-dom'
function Singlelaunch() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} =  useGetSingleLaunchQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/launch')
    }
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        {
            isLoading ? (
                <div className="spinner-border text-danger text-center" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={data.links.patch.small} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{data.name}</h5>
     <a href={data.links.wikipedia} target="_blank" rel="noreferrer">Launch Link</a> <br/> <br/> 
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default Singlelaunch