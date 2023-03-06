import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import EstateList from '../../components/estate/estate_list'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import './realEstate.css'

const RealEstate = () => {

  const nav = useNavigate()

  const handleReturn = () =>{
    nav(-1)
  }
 
  return (
    <div className='estatePage'>
        <button type='button' className='estatePage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<EstateList/>}/>
            {/* <Route path=':estateId' element = {}/> */}
        </Routes>
    </div>
  )
}

export default RealEstate