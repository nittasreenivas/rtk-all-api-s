import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useGetSingleMealQuery } from '../services/mealsApi'

function SingleMeal() {
    const {strMeal} = useParams()
    console.log("strMeal::",strMeal)
    const navigate = useNavigate()
    var {isLoading,data} = useGetSingleMealQuery(strMeal)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/meals')
    }
  return (
    <div className='border border-2 border-primary m-2 p-2'>
      {
            isLoading ? (
                <div className="spinner-border text-danger text-center" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={data.meals[0].strMealThumb} className="card-img-top" alt="..."/>
  <div className="card-body">
     <h5 className="card-title">{data.meals[0].strMeal}</h5> 
    <p className="card-text">{data.meals[0].strCategory}</p> 
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SingleMeal