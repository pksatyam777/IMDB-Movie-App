import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 max-w-6xl mx-auto py-4">{results.map((item,index)=>(
        <Card key={item.id} result={item} />
    ))}</div>
  )
}
