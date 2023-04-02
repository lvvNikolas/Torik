import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import  ServicesCard from '../../components/services/ServicesCard'
import ServicesList from '../../components/services/ServicesList'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
<<<<<<< HEAD
import ServicesDetails from '../details/services_details/services_details'
=======
import JobDetails from '../details/job_details/jobs_details'
import Home from '../home/home'
>>>>>>> 5e8663565e349918e3c0fbc0e1fdefe3ee7d154a
import './services.css'

const Services = () => {
      const nav = useNavigate()

      const handleReturn = () =>{
        nav(-1)
      }

  return (
    <div className='ServicesPage'>
        <button type='button' className='ServicesPage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<ServicesList/>}/>
<<<<<<< HEAD
            {/* <Route path=':servicesId' element = {}/> */}
            <Route path=':servicesId' element = {<ServicesDetails/>}/>
=======
            //TODO заменить на details
            <Route path=':servicesId' element = {<Home/>}/>
>>>>>>> 5e8663565e349918e3c0fbc0e1fdefe3ee7d154a
        </Routes>
    </div>
  )
}

export default Services