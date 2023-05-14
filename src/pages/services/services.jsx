import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import  ServicesCard from '../../components/services/ServicesCard'
import ServicesList from '../../components/services/ServicesList'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import ServicesDetails from '../details/services_details/services_details'
import './services.css'
import { useDispatch, useSelector } from 'react-redux'
import { usePopup } from '../../hooks/usePopup'
import { getAllServicesAds } from '../../firebase/crud/cruds'
import { fetchServicesAds } from '../../redux/slices/servicesPageSlice'

const Services = () => {
      const nav = useNavigate()

      const data = useSelector(state => state.services)
      const dispatch = useDispatch()
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState({
        isError:false,
        errorMsg:''
      })
     const {showPopup} = usePopup()

     useEffect(()=>{
      const initData = async() =>{
          setLoading(true)
          try {
            const data = await getAllServicesAds()
            dispatch(fetchServicesAds(data))
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


      

      const handleReturn = () =>{
        nav(-1)
      }

  return (
    <div className='ServicesPage'>
        <button type='button' className='ServicesPage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<ServicesList/>}/>
            {/* <Route path=':servicesId' element = {}/> */}
            <Route path=':servicesId' element = {<ServicesDetails/>}/>
        </Routes>
    </div>
  )
}

export default Services