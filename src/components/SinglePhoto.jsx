import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useGetSinglePhotoQuery } from '../services/photoApi'
function SinglePhoto() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} =  useGetSinglePhotoQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/photo')
    }
  return (
    <div>
       
        {
            isLoading ? (
                <div className="spinner-border text-danger text-center" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={data.thumbnailUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
   
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SinglePhoto