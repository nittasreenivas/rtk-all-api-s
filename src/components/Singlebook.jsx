import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import books from "../books.json"
function Singlebook() {
    const params = useParams()
    console.log("params.title::",params.title)
    const singleBook = books.find((book) => book.title === params.title)
    const navigate = useNavigate()
    const handleback = () => {
        navigate('/books')
    }
  return (
    <div>
        <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
                    <div className="card"  style={{width:"15rem"}}>
  <img src={singleBook.thumbnailUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{singleBook.title}</h5>
   
    <button  className="btn btn-success" onClick={handleback}>Go Back</button>
  </div>
</div>
                    </div>
    </div>
  )
}

export default Singlebook