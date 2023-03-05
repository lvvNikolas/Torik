import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import  TrucksCard from '../../components/trucks/TrucksCard'
import TrucksList from '../../components/trucks/TrucksList'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import Details from '../details/details'
import './trucks.css'

const Trucks = () => {
  const nav = useNavigate()

  const handleReturn = () =>{
    nav(-1)
  }

  return (
    <div className='TrucksPage'>
        <button type='button' className='TrucksPage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<TrucksList/>}/>
            <Route path=':trucksId' element = {<Details direction={publicRoutes.TRUCKS.route}/>}/>
        </Routes>
    </div>
  )
}

export default Trucks