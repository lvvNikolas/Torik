import { placeHolderData } from "../../firebase/firebase_exampe"
import FreshAdsCard from "./fresh_ads_card"
import './fresh_ads.css'
import { useState } from "react"
import { useResize } from "../../hooks/useResize"

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

    const itemsPerPage = 9

    const [paginated, setPaginated] = useState(paginationHandler(data,itemsPerPage))
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
   
    

    return(
        <div className="FreshAds">
            <div className="FreshAds__container" onScroll={(e)=>{
                console.log(e)
            }}>
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
                            <p className={prercentClassHandler(i)}>{(percentage / paginated.length) * 100}%</p>
                            <p className={indicatorClassHandler(i)}></p>
                         </a>)
                    })
                }
            </div>
        </div>
    )
}

export default FreshAdsList