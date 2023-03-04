import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import JobsCard from '../../components/jobs/jobs_card'
import JobList from '../../components/jobs/jobs_list'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import Details from '../details/details'
import './jobs.css'

const Jobs = () => {
  const nav = useNavigate()

  const handleReturn = () =>{
    nav(-1)
  }

  return (
    <div className='jobsPage'>
        <button type='button' className='jobsPage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<JobList/>}/>
            <Route path=':jobId' element = {<Details direction={publicRoutes.JOBS.route}/>}/>
        </Routes>
    </div>
  )
}

export default Jobs