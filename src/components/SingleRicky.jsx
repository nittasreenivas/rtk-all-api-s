import React from 'react'
import { useGetSingleRickyQuery } from '../services/rickyApi'
import { useParams ,useNavigate} from 'react-router-dom'
function SingleRicky() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} =  useGetSingleRickyQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/ricky')
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
  <img src={data.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
   
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SingleRicky