import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import EstateList from '../../components/estate/estate_list'
import { publicRoutes } from '../../constants/routes'
import { placeHolderData } from '../../firebase/firebase_exampe'
import RentDetails from '../details/rent_details/rent_details'
import './realEstate.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRentsAds } from '../../firebase/crud/cruds'
import { usePopup } from '../../hooks/usePopup'
import { fetchRentAds } from '../../redux/slices/rentPageSlice'

const RealEstate = () => {
  
  const data = useSelector(state => state.rent)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError:false,
    errorMsg:''
  })

  const nav = useNavigate()
  const {showPopup} = usePopup()

  useEffect(()=>{
    const initData = async() =>{
        setLoading(true)
        try {
          const data = await getAllRentsAds()
          dispatch(fetchRentAds(data))
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
    <div className='estatePage'>
        <button type='button' className='estatePage__back back__btn active_link' onClick={handleReturn}>Назад</button>
        <Routes>
            <Route index element = {<EstateList loading = {loading}/>}/>
            <Route path=':estateId' element = {<RentDetails/>}/>
        </Routes>
    </div>
  )
}

export default RealEstate