import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import data from "../data.json"
const SinglePerson = () => {
    const params = useParams()
    const personId = parseInt(params.id)
    console.log("personId::",personId)
    const person = data.people.find((person) => person.id === personId);
    const navigate = useNavigate()
    if (!person) {
        return <div>Person not found</div>;
      }
      const handleback = () => {
        navigate('/people')
    }
  return (
    <div>
        
        <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={person.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{person.name}</h5>
   
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
    </div>
  )
}

export default SinglePerson