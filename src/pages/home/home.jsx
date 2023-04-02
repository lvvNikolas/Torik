import React from 'react'
import FreshAdsList from '../../components/freshAds/fresh_ads_list'
import FreshEstateList from '../../components/freshEstate/fresh_estate_list'
import FreshEstate from '../../components/freshEstate/fresh_estate_list'
import FreshJobsList from '../../components/freshJobs/fresh_jobs_list'
import MainCategoryCard from '../../components/main_categories/main_category_card'
import MainCategoryCards from '../../components/main_categories/main_category_cards'
import Popup from '../../components/popup/popup'
import { publicRoutes } from '../../constants/routes'

import './home.css'

const Home = () => {

  const routes = [
    publicRoutes.JOBS,
    publicRoutes.SERVICES,
    publicRoutes.ESTATE,
    publicRoutes.TRUCKS,
  ]

  return (
    <div className='homePage'>
        <div className='homePage__header'>
            <h1 className="homePage__title">Доска объявлений "Торжок"</h1>
        </div>
        <MainCategoryCards routesArr = {routes}/>
        <FreshAdsList/>
        <FreshJobsList/>
        <FreshEstateList/>
    </div>
  )
}

export default Home