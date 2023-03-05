import React from 'react'
import { useState } from "react"
import { CITIES } from "../../constants/cities"
import { TRUCKS_CATEGORIES } from "../../constants/trucks"
import { placeHolderData } from "../../firebase/firebase_exampe"
import ListFilterSelect from "../list_filter_select.js/list_filter_select"
import TrucksCard from "./TrucksCard"


const cities = CITIES;
const TrucksCategories = TRUCKS_CATEGORIES

const TrucksList = () => {

    const [{Trucks}, setData] = useState(placeHolderData.TrucksPage)
  
    const [location, setLocation] = useState({
            id:cities[0].id,
            title:cities[0].title
    })
    const [category, setCategory] = useState({
            id:TrucksCategories[0].id,
            title:TrucksCategories[0].title
    })


    const applyFilters = () =>{

    }


  return (
    <>
    <h1 className="TrucksPage__title">Траки в {location.title}</h1>
    <div className='TrucksPage__body'>
        <div className='TrucksPage__filters TrucksPage__column'>
            <ListFilterSelect 
            state={location} 
            setState ={setLocation} 
            dataList = {cities}/>
            
            <ListFilterSelect 
            state={category} 
            setState ={ setCategory} 
            dataList = {TrucksCategories}/>

            <button className="TrucksPage__filters-btn active_btn" type="button">Применить</button>
            
        </div>
        <div className='TrucksPage__list TrucksPage__column'>
            {
                Trucks.map((e, i) => <TrucksCard key = {i} data={e} />)
            }
        </div>
        <div className='TrucksPage__ads TrucksPage__column'>
            <div className='TrucksPage__ads-banner'>реклама</div>
        </div>
    </div>
</>
  )
}

export default TrucksList