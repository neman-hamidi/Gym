import React from 'react'
import "./Plansitem.css"

export default function Plansitem({ title, src}) {
  return (
    <div className='col-md-3 col-12 plan-bg'>
        <div className='div-img'>
            <img src={src} alt="" />
        </div>
    <div className='text-center desc-div'>
        <p className='text-warning fw-bold my-5 fs-2'>{title}​​​​​​​</p>
        <button className="btn btn-danger">برنامه رایگان</button>
    </div>

    </div>
  )
}
