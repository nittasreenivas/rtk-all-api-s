import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useGetSingleGithubUserQuery } from '../services/githubApi'
// import { Link } from 'react-router-dom'
function SingleGithubUser() {
    const {id} = useParams()
    console.log("id::",id)
    const navigate = useNavigate()
    var {isLoading,data} =  useGetSingleGithubUserQuery(id)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/github')
    }
  return (
    <div  className='border border-2 border-primary m-2 p-2'>
       
        {
            isLoading ? (
                <div className="spinner-border text-danger text-center" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={data.avatar_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">{data.location}</p>
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SingleGithubUser