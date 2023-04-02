import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import  TrucksCard from '../../components/trucks/TrucksCard'
import TrucksList from '../../components/trucks/TrucksList'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
<<<<<<< HEAD
import TrucksDetails from '../details/trucks_details/trucks_details'
=======
import Home from '../home/home'
>>>>>>> 5e8663565e349918e3c0fbc0e1fdefe3ee7d154a
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
<<<<<<< HEAD
            <Route path=':trucksId' element = {<TrucksDetails/>}/>
=======
            //TODO заменить на details
            <Route path=':trucksId' element = {<Home/>}/>
>>>>>>> 5e8663565e349918e3c0fbc0e1fdefe3ee7d154a
        </Routes>
    </div>
  )
}

export default Trucks