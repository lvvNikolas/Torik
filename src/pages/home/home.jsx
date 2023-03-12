import React from 'react'
import FreshAdsList from '../../components/freshAds/fresh_ads_list'

import './home.css'

const home = () => {
  return (
    <div className='homePage'>
        <div className='homePage__header'>
            <h1 className="homePage__title">Доска объявлений "Торжок"</h1>
        </div>
        <FreshAdsList uniqueName={"fresh"}/>
    </div>
  )
}

export default home