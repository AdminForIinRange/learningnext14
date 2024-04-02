
"use client"
import React from 'react'
import {sayHello} from "@/lib/action"
const ServerActionTest  = () => {
  return (

    <div>
    <form action={sayHello}>  <button> test </button> </form>
    </div>

  )
}

export default ServerActionTest 