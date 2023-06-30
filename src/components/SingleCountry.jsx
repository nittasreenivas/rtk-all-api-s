import React from 'react'
import { useGetSingleCountryQuery } from '../services/countryApi'
import { useParams ,useNavigate} from 'react-router-dom'
function SingleCountry() {
    const {name} = useParams()
    console.log("name::",name)
    const navigate = useNavigate()
    var {isLoading,data} = useGetSingleCountryQuery(name)
    console.log("data::",data,isLoading)
    const handleback = () => {
        navigate('/country')
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
  <img src={data[0].flags[1]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data[0].name.common}</h5>
    <p className="card-text">{data[0].capital}</p>
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
            )
        }
    </div>
  )
}

export default SingleCountry