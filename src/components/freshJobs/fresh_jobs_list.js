import { placeHolderData } from "../../firebase/firebase_exampe"
import FreshJobsCard from "./fresh_jobs_card"
import './fresh_jobs.css'
import { useCallback, useEffect, useState } from "react"
import { useResize } from "../../hooks/useResize"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"


const paginationHandler = (array, countPerPage) =>{
    const copy = array.map(e => e)
    const resultarr = []
    for (let i = 0; i < array.length; i += countPerPage) {
        const chunk = copy.slice(i, i + countPerPage);
        resultarr.push(chunk)
    }
    return(resultarr)
}

const jobs = placeHolderData.JobPage.Jobs

const placeHolderFresh = [
    ...jobs,
    ...jobs, 
    ...jobs, 
    ...jobs, 
    ...jobs
]

const FreshJobsList = () => {
 
    const data = placeHolderFresh
    
    const width = useResize()
  
    const [paginated, setPaginated] = useState(paginationHandler(data,9))
    const [currentPage, setCurrentPage] = useState(0)
    const [chunkWidth, setChunkWidth] = useState(0)
    const [left, setLeft] = useState({
        marginLeft:0
    })

    const measuredRef = useCallback(node =>{
        if(node !== null){
            setChunkWidth(
                node.getBoundingClientRect().width
            )
        }
    },[width])
    
    const indicatorClassHandler = (id) =>{
        return id === currentPage ?
        "FreshJobs__paginator-indicator FreshJobs__paginator-indicator--active":
        "FreshJobs__paginator-indicator"
    }

    const prercentClassHandler = (id) =>{
        return id === currentPage ?
        "FreshJobs__paginator-percent FreshJobs__paginator-percent--active":
        "FreshJobs__paginator-percent"
    }

    const leftHandler = (id) =>{
        setCurrentPage(id)
        const isMargin = () => id <= 0 ? 0 : 25 * id
       
        setLeft({
            transform: `translateX(-${chunkWidth * id + isMargin()}px)`
        })
    }
   
    useEffect(()=>{
        if(width > 551 && width < 950){
            setPaginated(paginationHandler(data,4))
        }
        if(width < 550){
            setPaginated(paginationHandler(data,3))
        }
        if(width > 950){
            setPaginated(paginationHandler(data,6))
        } 
    },[width])

    return(
        <div className="FreshJobs">
            <div className="FreshJobs__header">
                <h2 className="section__title">Свежие вакансии</h2>
                <Link to={publicRoutes.JOBS.route}
                className="FreshJobs__header-link active_link">Смотреть все</Link>
            </div>
            
            <div className="FreshJobs__container">
                <div className="FreshJobs__horizontal-content" style={left}>
                {
                    paginated.map((e,i)=>
                        <div className="FreshJobs__page-chunk"  ref = {measuredRef} key = {i}>
                            {
                                e.map((card,j)=><FreshJobsCard key={j} data={card}/>)
                            }
                        </div>
                    )
                }
                </div>
            </div>
            <div className="FreshJobs__paginator">
                {
                    paginated.map((e,i)=>{
                        let percentage = i + 1
                        return (
                        <div 
                        className = 'FreshJobs__paginator-item'
                        onClick = {()=>{
                           leftHandler(i)
                        }}
                         >
                            <p className={prercentClassHandler(i)}>{Math.floor((percentage / paginated.length) * 100)}%</p>
                            <p className={indicatorClassHandler(i)}></p>
                         </div>)
                    })
                }
            </div>
        </div>
    )
}

export default FreshJobsList