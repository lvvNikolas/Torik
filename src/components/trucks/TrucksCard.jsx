import React from 'react'
import { useNavigate } from "react-router-dom"
import { VipStatusSign } from "../vip-status/vip_status"

const TrucksCard = ({data}) => {

        const {
          Id,
          TrucksTitle,
          Price,
          TrucksDescription,
          Date,
          AdsStatus,
          Category
      } = data

  const nav = useNavigate()

  const handleNavigate = () => {
    nav(`/trucks/${Id}`)
  }

  return (
          <div className="TrucksPage__card" onClick={handleNavigate}>
          <h2 className="TrucksPage__card-title">{TrucksTitle}</h2>
          <p className="TrucksPage__card-price">{Price}</p>
          <p className="TrucksPage__card-desc">{TrucksDescription}</p>
          <div className="TrucksPage__card-extra">
              <p className="TrucksPage__card-date">{Date}</p>
              <p className="TrucksPage__card-category">{Category}</p>
              <VipStatusSign status={AdsStatus}/>
          </div>
      </div>
  )
}

export default TrucksCard