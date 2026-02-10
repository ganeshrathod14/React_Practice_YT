import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const param =  useParams() 

      console.log(param.CourseID)
    
  return (
    <div>
        <h1> {param.CourseID} Course Detail</h1>
    </div>
  )
}

export default CourseDetail