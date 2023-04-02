import './fresh_ads.css'
import noImage from '../../assets/no_image.svg'
import { useCallback, useState } from 'react'
import { useResize } from '../../hooks/useResize'
import { Link, useNavigate } from 'react-router-dom'
import { publicRoutes } from '../../constants/routes'
import { VipStatusSign } from '../vip-status/vip_status'
import { VIP } from '../../constants/vip_status'

const FreshAdsCard = ({data, image = noImage}) => {
    
    const {
        Id,
        Category,
        OwnerName,
        Date, 
        Type
    } = data

    const nav = useNavigate()
    // Пришлось дополнительно делать деструктуризацию названия объявления
    // Так как поле имеет разыне название у jobsTitle у services Services titile
    // и т.д.

    const title = data.JobTitle || 
    data.TrucksTitle || 
    data.ServicesTitle || 
    data.EstateTitle
 
    
    const handleCategories = () => {
        if(Type === "JOBS"){
            return {
                name:"Jobs",
                route:publicRoutes.JOBS.route
            }
        }
        if(Type === "SERVICES"){
            return {
                name:"Services",
                route:publicRoutes.SERVICES.route
            }
        }
        if(Type === "TRUCKS"){
            return {
                name:"Trucks",
                route:publicRoutes.TRUCKS.route
            }
        }
        if(Type === "ESTATE"){
            return {
                name:"Estates",
                route:publicRoutes.ESTATE.route
            }
        }
    }

    const handleClickRedirect = (event) => {
        event.stopPropagation()
        nav(`${handleCategories().route}/${Id}`)
    }
    
    const [cardWidth, setCardWidth] = useState(0)
    const windowWidth = useResize()

    //Получаем ширину контейнера чтобы сделать текст в 1 строку
    // и троеточие. При этом при ресайзе делаем перерассчет
    const measuredRef = useCallback(node =>{
        if(node !== null){
            setCardWidth(
                node.getBoundingClientRect().width - 55
            )
        }
    },[windowWidth])

    return(
        <div className="FreshAds__item" onClick={handleClickRedirect}>
            <img className='FreshAds__image' src={image} />
            <div className='FreshAds__item-data' ref={measuredRef}>
                <h2 style={{
                    width:cardWidth
                }}>{title}</h2>
                <div className='FreshAds__item-bottom'>
                    <Link className = 'active_link FreshAds__item-link' onClick={(e)=>e.stopPropagation()}
                    to = {handleCategories().route}>{handleCategories().name}</Link>
                    <VipStatusSign status={VIP} size = "sm"/>
                </div>
            </div>
        </div>
    )
}

export default FreshAdsCard