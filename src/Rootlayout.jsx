import React from 'react'
import { Outlet } from 'react-router'
import Nabver from './Components/Layout/Nabver'
import Futter from './Components/Layout/Futter'

const Rootlayout = () => {
  return (
   <>
   <Nabver/>
   <Outlet/>
   <Futter/>
   </>
  )
}

export default Rootlayout