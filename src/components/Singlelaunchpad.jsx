import React from 'react'
import { useGetSingleLaunchpadQuery } from '../services/launchpadApi'
import { useParams ,useNavigate} from 'react-router-dom'
function Singlelaunchpad() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} = useGetSingleLaunchpadQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/launchpad')
    }
  return (
    <div  className='border border-2 border-danger m-2 p-2'>
        {
            isLoading ? (
                <div className="spinner-border text-danger text-center" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={data.images.large} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{data.full_name}</h5>
    <h5 className="card-title">{data.locality}</h5>
    <h5 className="card-title">{data.region}</h5>
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default Singlelaunchpad