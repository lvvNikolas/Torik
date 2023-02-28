import React from 'react'
import './trucks.css'
import Cdl from "../../components/trucks/cdl/Cdl";
const trucks = () => {
  return (
    <>
    <div className="container">
         {/* <h1 className="trucks">This is  trucks page</h1> */}
         <Cdl className="container"/>
    </div>
    </>
  )
}

export default trucks