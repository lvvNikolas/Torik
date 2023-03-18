import React from 'react'
import FreshAdsList from '../../components/freshAds/fresh_ads_list'
import MainCategoryCard from '../../components/main_categories/main_category_card'
import MainCategoryCards from '../../components/main_categories/main_category_cards'
import { publicRoutes } from '../../constants/routes'

import './home.css'

const home = () => {

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
        <FreshAdsList uniqueName={"fresh"}/>
    </div>
  )
}

export default home