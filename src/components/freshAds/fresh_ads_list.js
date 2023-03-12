import { placeHolderData } from "../../firebase/firebase_exampe"
import FreshAdsCard from "./fresh_ads_card"
import './fresh_ads.css'
import { useEffect, useState } from "react"
import { useResize } from "../../hooks/useResize"
import { useSelector } from "react-redux"

const paginationHandler = (array, countPerPage) =>{
    const copy = array.map(e => e)
    const resultarr = []
    for (let i = 0; i < array.length; i += countPerPage) {
        const chunk = copy.slice(i, i + countPerPage);
        resultarr.push(chunk)
    }
    return(resultarr)
}

const services = placeHolderData.ServicesPage.Services

const placeHolderFresh = [
    ...services,
    ...services, 
    ...services, 
    ...services, 
    ...services
]

const FreshAdsList = ({uniqueName}) => {
 
    const data = placeHolderFresh
    
    const width = useResize()

    const [paginated, setPaginated] = useState(paginationHandler(data,9))
    const [currentPage, setCurrentPage] = useState(0)
    const [currentOffset, setCurrentOffset] = useState(0)
    
    const indicatorClassHandler = (id) =>{
        return id === currentPage ?
        "FreshAds__paginator-indicator FreshAds__paginator-indicator--active":
        "FreshAds__paginator-indicator"
    }

    const prercentClassHandler = (id) =>{
        return id === currentPage ?
        "FreshAds__paginator-percent FreshAds__paginator-percent--active":
        "FreshAds__paginator-percent"
    }
   
    useEffect(()=>{
        console.log(width)
        if(width > 551 && width < 950){
            setPaginated(paginationHandler(data,4))
        }
        if(width < 550){
            setPaginated(paginationHandler(data,3))
        }
        if(width > 950){
            setPaginated(paginationHandler(data,9))
        } 
    },[width])

    return(
        <div className="FreshAds">
            <div className="FreshAds__container">
                {
                    paginated.map((e,i)=>
                        <div className="FreshAds__page-chunk" id={`${uniqueName}chunk${i}`}>
                            {
                                e.map((card,j)=><FreshAdsCard data={card}/>)
                            }
                        </div>
                    )
                }
            </div>
            <div className="FreshAds__paginator">
                {
                    paginated.map((e,i)=>{
                        let percentage = i + 1
                        return (
                        <a href={`#${uniqueName}chunk${i}`}
                        className = 'FreshAds__paginator-item'
                        onClick = {()=>{
                            setCurrentPage(i)
                        }}
                         >
                            <p className={prercentClassHandler(i)}>{Math.floor((percentage / paginated.length) * 100)}%</p>
                            <p className={indicatorClassHandler(i)}></p>
                         </a>)
                    })
                }
            </div>
        </div>
    )
}

export default FreshAdsList