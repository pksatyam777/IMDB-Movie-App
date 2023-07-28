"use client"
import React from 'react'
import { useState } from 'react'
import {useRouter} from 'next/navigation'
export default function SearchBox() {
  const [search,setSearch]=useState('')
  const router=useRouter()
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!search) return;
    router.push(`/search/${search}`)
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="flex justify-between max-w-6xl mx-auto items-center">
        <input type="text" placeholder="Search keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent mx-6" onChange={(e)=> setSearch(e.target.value)}
        value={search} />
        <button type="submit" className="text-amber-600 mx-6" disabled={!search ? true:false}>Search </button> 
    </form>
  )
}
