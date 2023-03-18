import './fresh_ads.css'
import noImage from '../../assets/no_image.svg'
import { useCallback, useState } from 'react'
import { useResize } from '../../hooks/useResize'
import { Link } from 'react-router-dom'
import { publicRoutes } from '../../constants/routes'
import { VipStatusSign } from '../vip-status/vip_status'
import { VIP } from '../../constants/vip_status'

const FreshAdsCard = ({data, image = noImage}) => {
    
    const {
        ServicesTitle,
        Category,
        OwnerName,
        Date, 
    } = data
    
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
        <div className="FreshAds__item">
            <img className='FreshAds__image' src={image} />
            <div className='FreshAds__item-data' ref={measuredRef}>
                <h2 style={{
                    width:cardWidth
                }}>{ServicesTitle}</h2>
                <div className='FreshAds__item-bottom'>
                    <Link className = 'FreshAds__item-link' to = {publicRoutes.SERVICES.route}>{publicRoutes.SERVICES.name}</Link>
                    <VipStatusSign status={VIP} size = "sm"/>
                </div>
            </div>
        </div>
    )
}

export default FreshAdsCard