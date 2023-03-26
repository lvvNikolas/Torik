import './fresh_jobs.css'
import noImage from '../../assets/no_image.svg'
import { useCallback, useState } from 'react'
import { useResize } from '../../hooks/useResize'
import { Link, useNavigate } from 'react-router-dom'
import { publicRoutes } from '../../constants/routes'
import { VipStatusSign } from '../vip-status/vip_status'
import { VIP } from '../../constants/vip_status'

const FreshJobsCard = ({data, image = noImage}) => {
    
    const {
        Id,
        JobTitle,
        Category,
        OwnerName,
        Date,
        Price,
        City
    } = data
    
    const [cardWidth, setCardWidth] = useState(0)
    const windowWidth = useResize()
    const nav = useNavigate()

    //Получаем ширину контейнера чтобы сделать текст в 1 строку
    // и троеточие. При этом при ресайзе делаем перерассчет
    const measuredRef = useCallback(node =>{
        if(node !== null){
            setCardWidth(
                node.getBoundingClientRect().width - 55
            )
        }
    },[windowWidth])
    
    const handleClickRedirect = (event) => {
        event.stopPropagation()
        nav(`${publicRoutes.JOBS.route}/${Id}`)
    }
    return(
        <div className="FreshJobs__item" onClick={handleClickRedirect}>
            <div className='FreshJobs__item-data' ref={measuredRef}>
                <h2 style={{
                    width:cardWidth
                }}>{JobTitle}</h2>
                 <p className='FreshJobs__item-income'>{Price}</p>
                <div className='FreshJobs__item-bottom'>
                    <p className = 'FreshJobs__item-loc'>{City}</p>
                    <VipStatusSign status={VIP} size = "sm"/>
                </div>
            </div>
        </div>
    )
}

export default FreshJobsCard