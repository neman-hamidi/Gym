import React from 'react'
import "./Blogitem.css"

export default function Blogitem({src, title, desc}) {
  return (
    <div className='blogitemmain'>
        <div>
            <div className='div-img-blog'><img src={src} alt="" /></div>
            <h4 className='mt-2'>{title}</h4>
            <p className='text-secondary'>{desc}</p>
        </div>
    </div>
  )
}
