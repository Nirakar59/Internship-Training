// import React from 'react'

import { use } from "react"
import { LogInContext } from "../Context/AuthContext"

const DashBoard = () => {
  const{user} = use(LogInContext)
  return (
    <>
    <title>Dashboard</title>
    <h1>Welcome {user?.user }</h1>
    </>
  )
}

export default DashBoard