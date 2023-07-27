import React from 'react'

export default function Results({results}) {
  return (
    <div>{results.map((item,index)=>(
        <div key={item.id}>{item.original_title}</div>
    ))}</div>
  )
}
