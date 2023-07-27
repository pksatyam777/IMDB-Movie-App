"use client"
import React from 'react'
import { useEffect } from 'react'
export default function error({error,reset}) {
  useEffect(()=>{
    console.log(error)
  },[error]);
  return (
    <div className="text-center mt-10"><p>Something went wrong</p><button className="hover:text-amber-600"onClick={()=>{reset()}}>Try Again</button></div>
  )
}
