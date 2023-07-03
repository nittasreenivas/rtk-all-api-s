import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useGetSingleRandomUserQuery } from '../services/randomApi'

const SingleRandomUser = () => {
    const {id} = useParams()
    console.log("id::",id)
    var {isLoading,data} = useGetSingleRandomUserQuery(id)
    console.log("data::",data)
    const navigate = useNavigate()
    const handleback = () => {
        navigate('/random')
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
  <img src={data.results[0].picture.large} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.results[0].name.first}</h5>
    <h5 className="card-title">{data.results[0].name.last}</h5>
    {/* <h5 className="card-title">${data.price}</h5>  */}
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SingleRandomUser