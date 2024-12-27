import React from 'react'
import Coachitem from '../Coachitem/Coachitem'
import "./Coach.css"

export default function Coach() {
  return (
    <div>
       <div className='text-center'>
            <p className="fs-3 fw-bold mt-5">مربیان</p>
            <div className="underline"></div>
        </div>
        <div className="container">
          <div className="row coach-row">
          <Coachitem src="v1.png" title="محمد امینی" skill="یوگا"/>
          <Coachitem src="v2.png" title="رضا پاکدامن" skill="پرورش اندام"/>
          <Coachitem src="v1.png" title="محمد امینی" skill="یوگا"/>
          <Coachitem src="v2.png" title="رضا پاکدامن" skill="پرورش اندام"/>
          </div>
      <div className='text-center mt-5'>
      <div className="btn btn-danger">مشاهده همه مربیان</div>
      </div>
        </div>
    </div>
  )
}
