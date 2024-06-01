import React, { useContext, useEffect, useState } from 'react'
import { Context} from '../../main';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function jobs() {

  const [jobs,setjobs] = useState ([])
  const {isAuthorized} = useContext(Context)
  const navigateTo = useNavigate()

  useEffect(()=>{
    try {
      axios.get('https://job-searching-backend-1.onrender.com/api/v1/job/getall',{
      withCredentials:true,
    })
    .then((response)=>{
      setjobs(response.data)
      

      })
      
    } catch (error) {
      console.log(error)
      
    }
  },[])
  if(!isAuthorized){
    navigateTo('/login')
  }
  return (
   <> 

<section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>


   </>
  )
}

export default jobs