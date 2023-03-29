import React from 'react'
import { useNavigate } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"
import { VipStatusSign } from "../vip-status/vip_status"


const ServicesCard = ({data}) => {

    const {
        Id,
        ServicesTitle,
        Price,
        ServicesDescription,
        Date,
        AdsStatus,
        Category
    } = data

    const nav = useNavigate()

    const handleNavigate = () =>{
        nav(`/services/${Id}`)
    }


  return (
                <div className="ServicesPage__card" onClick={handleNavigate}>
                <h2 className="ServicesPage__card-title">{ServicesTitle}</h2>
                <p className="ServicesPage__card-price">{Price}</p>
                <p className="ServicesPage__card-desc">{ServicesDescription}</p>
                <div className="ServicesPage__card-extra">
                    <p className="ServicesPage__card-date">{Date}</p>
                    <p className="ServicesPage__card-category">{Category}</p>
                    <VipStatusSign status={AdsStatus}/>
                </div>
            </div>
  )
}

export default ServicesCard