import './fresh_estate.css'
import noImage from '../../assets/no_image.svg'
import { useCallback, useState } from 'react'
import { useResize } from '../../hooks/useResize'
import { Link, useNavigate } from 'react-router-dom'
import { publicRoutes } from '../../constants/routes'
import { VipStatusSign } from '../vip-status/vip_status'
import { VIP } from '../../constants/vip_status'

const FreshEstateCard = ({data}) => {
    
    const {
        Id,
        EstateTitle,
        EstatePoster,
        Category,
        OwnerName,
        Date, 
        Type
    } = data

    const nav = useNavigate()

    
    const handleCategory = () => {
        return {
            name:"Estates",
            route:publicRoutes.ESTATE.route
        }
    }

    const handleClickRedirect = () => {
        nav(`${handleCategory().route}/${Id}`)
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
        <Link className="FreshEstates__item" to = {`${handleCategory().route}/${Id}`}>
            <img className='FreshEstates__image' src={EstatePoster} />
            <div className='FreshEstates__item-data' ref={measuredRef}>
                <h2 style={{
                    width:cardWidth
                }}>{EstateTitle}</h2>
                <div className='FreshEstates__item-bottom'>
                    <Link className = 'active_link FreshEstates__item-link' 
                        to = {handleCategory().route}>{handleCategory().name}</Link>
                    <VipStatusSign status={VIP} size = "sm"/>
                </div>
            </div>
        </Link>
    )
}

export default FreshEstateCard