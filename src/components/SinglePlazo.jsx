import React from 'react'
import { useGetSinglePlatoQuery } from '../services/platoApi'
import { useParams ,useNavigate} from 'react-router-dom'
function SinglePlazo() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} =  useGetSinglePlatoQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/plato')
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
  <img src={data.images[0]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <h5 className="card-title">${data.price}</h5>
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SinglePlazo