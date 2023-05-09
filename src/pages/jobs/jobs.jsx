import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import JobsCard from '../../components/jobs/jobs_card'
import JobList from '../../components/jobs/jobs_list'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import JobDetails from '../details/job_details/jobs_details'
import './jobs.css'
import { useDispatch, useSelector } from 'react-redux'
import { usePopup } from '../../hooks/usePopup'
import { getAllRJobsAds } from '../../firebase/crud/cruds'
import { fetchJobsAds } from '../../redux/slices/jobsPageSlice'

const Jobs = () => {
  const nav = useNavigate()

  const data = useSelector(state => state.rent)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError:false,
    errorMsg:''
  })

  const {showPopup} = usePopup()
  const handleReturn = () =>{
    nav(-1)
  }

  useEffect(()=>{
    const initData = async() =>{
        setLoading(true)
        try {
          const data = await getAllRJobsAds()
          dispatch(fetchJobsAds(data))
          setTimeout(()=>{
            setLoading(false)
          },500)
        } catch (error) {
          setLoading(false)
          setError(p => ({...p, isError:true}))
        }  
    }
    if(data.length <= 0){
      initData()
    }
  },[])

  useEffect(()=>{
    if(error.isError){
      showPopup('Упс, ошибка при загрузке')
    }
  },[error.isError])

  return (
    <div className='jobsPage'>
        <button type='button' className='jobsPage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<JobList loading = {loading}/>}/>
            <Route path=':jobId' element = {<JobDetails/>}/>
        </Routes>
    </div>
  )
}

export default Jobs