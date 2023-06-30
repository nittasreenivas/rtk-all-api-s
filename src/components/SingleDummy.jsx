import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useGetSingleDummyQuery } from '../services/dummyApi'
function SingleDummy() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} = useGetSingleDummyQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/products')
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
  <img src={data.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.descripttion}</p>
    <p className="card-text">${data.price}</p>
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SingleDummy