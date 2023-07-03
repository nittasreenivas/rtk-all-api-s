import React from 'react'
import { useState } from 'react'
function Bored() {
    const [activity,setActivity] = useState("")
    const getActivity = async () => {
        const res = await fetch("https://www.boredapi.com/api/activity")
        const data = await res.json()
        console.log("data::",data)
        setActivity(data)
    }
  return (
    <div>

    <section className='vasu'>
        <h3>Sorry for being Bored....</h3>
        <p>Use the button to generate a fun activity to try</p>
        <button className='w-25 btn btn-success' onClick={getActivity}>Generate Activity</button>
       
        {
            activity ? (
                <div className='activities'>
                <article>Activity Name:{activity.activity}</article>
                <article>Activity Type:{activity.type}</article>
                {
                    activity.link && (
                        // <article>Activity Link:{activity.link}</article>
                        <article>
                        <a href= {activity.link} target="_blank" rel="noreferrer">{activity.link}</a>
                        </article>
                    )
                }
               
                <article>Number of Members needed:{activity.participants}</article>
            </div>
            ):(
                <p>click on button to get a list of fun activities you can do</p>
            )
        }
       
    </section>
    </div>
  )
}

export default Bored