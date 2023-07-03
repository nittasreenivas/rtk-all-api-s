import React from 'react'
import { useState } from 'react'
import Bored from './Bored'
function Button() {
    const [visible,setVisible] = useState(false)
  return (
    <>
    {
        !visible && (
            <div className='d-flex flex-column justify-content-center align-items-center  bored'>
       
            <button className='btn btn-success btn-lg mx-auto' onClick={() => setVisible(true)}>I'm Bored</button>
        </div>
        )
    }
   
    {
        visible &&   <Bored/>
    }
   
    </>
  )
}

export default Button