import React from 'react'
import { useGetSingleDragonQuery } from '../services/dragonsApi'
import { useParams ,useNavigate} from 'react-router-dom'
function Singledragon() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} = useGetSingleDragonQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/dragons')
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
  <img src={data.flickr_images[2]} className="card-img-top" alt="..."/>
  <div className="card-body">
    
     <h5 className="card-title">{data.name}</h5>
     <h5 className="card-title">{data.type}</h5>
     <a href={data.wikipedia} target="_blank" rel="noreferrer">Launch Link</a> <br/> <br/>  
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default Singledragon