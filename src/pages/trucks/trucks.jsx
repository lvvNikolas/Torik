import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import  TrucksCard from '../../components/trucks/TrucksCard'
import TrucksList from '../../components/trucks/TrucksList'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import TrucksDetails from '../details/trucks_details/trucks_details'
import './trucks.css'
import { useDispatch, useSelector } from 'react-redux'
import { usePopup } from '../../hooks/usePopup'
import { getAllTrucksAds } from '../../firebase/crud/cruds'
import { fetchTrucksAds } from '../../redux/slices/trucksPageSlice'

const Trucks = () => {
  const nav = useNavigate()

  const data = useSelector(state => state.trucks)
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
          const data = await getAllTrucksAds()
          dispatch(fetchTrucksAds(data))
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
    <div className='TrucksPage'>
        <button type='button' className='TrucksPage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<TrucksList/>}/>
            <Route path=':trucksId' element = {<TrucksDetails/>}/>
        </Routes>
    </div>
  )
}

export default Trucks