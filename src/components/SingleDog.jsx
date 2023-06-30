// import React from 'react'
// import { useGetSingleDogQuery } from '../services/dogApi'
// import { useParams ,useNavigate} from 'react-router-dom'
// function SingleDog() {
//     const {name} = useParams()
//     console.log("id::",name)
//     const navigate = useNavigate()
//     var {isLoading,data} = useGetSingleDogQuery(name)
//     console.log("data::",data,isLoading)
//     const handleback = () => {
//         navigate('/dog')
//     }
//   return (
//     <div className='border border-2 border-danger m-2 p-2'>
//         <h3> SingleDog </h3>
//         {
//             isLoading ? (
//                 <div className="spinner-border text-danger text-center" role="status">
//   <span className="visually-hidden">Loading...</span>
// </div>
//             ): (
//                 <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
//                     <div className="card"  style={{width:"15rem"}}>
//   <img src={`https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{data.name}</h5>
//     <p className="card-text">{data.description}</p>
//     <p className="card-text">${data.life_span}</p>
//     <button  className="btn btn-success" onClick={handleback}>Go Back</button>
//   </div>
// </div>
//                     </div>
//             )
//         }

//     </div>
//   )
// }

// export default SingleDog
import React from 'react';
import { useGetSingleDogQuery } from '../services/dogApi';
import { useParams, useNavigate } from 'react-router-dom';

function SingleDog() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useGetSingleDogQuery(name);

  const handleBack = () => {
    navigate('/dog');
  };

  return (
    <div className='border border-2 border-danger m-2 p-2'>
     
      {isLoading ? (
        <div className='spinner-border text-danger text-center' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      ) : (
        <div className='d-flex flex-wrap justify-content-center mt-3 p-3'>
          <div className='card' style={{ width: '15rem' }}>
            <img
              src={`https://cdn2.thedogapi.com/images/${data[0].reference_image_id}.jpg`}
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>{data[0].name}</h5>
              <p className='card-text'>{data[0].temperament}</p>
              <p className='card-text'>{data[0].life_span}</p>
              <button className='btn btn-success' onClick={handleBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleDog;
