import React from 'react'
import books from "../books.json"
import { Link } from 'react-router-dom'
function Books() {
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h3 className='text-center'>Books</h3>
        <div className='d-flex flex-wrap justify-content-around'>
            {
                books.map((book) => {
                    return(
                        <div className="card p-2 m-3" style={{width:"15rem"}} key={book.title}>
                                    <Link to={`/books/${book.title}`} state={book}>
                                <img src={book.thumbnailUrl} className="card-img-top" alt="..."/>
                                </Link>
                              </div> 
                    )
                })
            }
        </div>
    </div>
  )
}

export default Books