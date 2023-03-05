import React from 'react'
import { useState } from "react"
import { CITIES } from "../../constants/cities"
import { SERVICES_CATEGORIES } from "../../constants/services"
import { placeHolderData } from "../../firebase/firebase_exampe"
import ListFilterSelect from "../list_filter_select.js/list_filter_select"
import ListFilterToggler from "../list_filter_toggler/list_filter_toggler"
import ServicesCard from "./ServicesCard"


        const cities = CITIES
        const servicesCategories = SERVICES_CATEGORIES

        const ServicesList = () => {
    
        const [{Services}, setData] = useState(placeHolderData.ServicesPage)
        const [sorting, setSorting] = useState([
            {
                title:"Вакансии",
                isActive:true
            },
            {
                title:"Резюме",
                isActive:false
            }
        ])

        const [location, setLocation] = useState({
            id:cities[0].id,
            title:cities[0].title
    })
    const [category, setCategory] = useState({
            id:servicesCategories[0].id,
            title:servicesCategories[0].title
    })

    const applyFilters = () =>{

    }


    return (
                    <>
                    <h1 className="ServicesPage__title">Бизнес и услуги в {location.title}</h1>
                    <div className='ServicesPage__body'>
                        <div className='ServicesPage__filters ServicesPage__column'>
                            <ListFilterSelect 
                            state={location} 
                            setState ={setLocation} 
                            dataList = {cities}/>
                            
                            <ListFilterSelect 
                            state={category} 
                            setState ={ setCategory} 
                            dataList = {servicesCategories}/>

                            <button className="ServicesPage__filters-btn active_btn" type="button">Применить</button>

                            <ListFilterToggler 
                            state={sorting} 
                            setState ={setSorting}/>
                        </div>
                        <div className='ServicesPage__list ServicesPage__column'>
                            {
                                Services.map((e, i) => <ServicesCard key = {i} data={e} />)
                            }
                        </div>
                        <div className='ServicesPage__ads ServicesPage__column'>
                            <div className='ServicesPage__ads-banner'>реклама</div>
                        </div>
                    </div>
                </>
    )
    }

    export default ServicesList