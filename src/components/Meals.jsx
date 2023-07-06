import React from 'react'
import { useGetAllMealsQuery } from '../services/mealsApi'
import { Link } from 'react-router-dom'
function Meals() {
    var {isLoading,data} =  useGetAllMealsQuery()
    console.log("data::",data,isLoading)
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h3  className='text-center'>Meals</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ): (
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.meals.map((d,i) => {
                            return(
                                <div className="card p-2 m-3" style={{width:"15rem"}} key={i}>
                                    <Link to={`/meals/${d.strMeal}`}>
                                <img src={d.strMealThumb} className="card-img-top" alt="..."/>
                                </Link>
                              </div>
                            )
                        })
                    }
                    </div>
            )
        }
    </div>
  )
}

export default Meals