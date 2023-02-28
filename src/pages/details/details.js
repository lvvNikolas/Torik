import { useSelector } from "react-redux"
import { Navigate, useParams, useRoutes } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"

// TODO Заменить дивы на details для разных страниц
const Details = ({direction}) =>{
    const {JOBS,ESTATE,SERVICES,TRUCKS} = publicRoutes
    const {jobId} = useParams()

    console.log(direction, jobId)
    if(direction === JOBS.route){
        return <div>THIS IS JOB DETAILS</div>
    }
    if(direction === ESTATE.route){
        return <div>THIS IS JOB DETAILS</div>
    }
    if(direction === SERVICES.route){
        return <div>THIS IS JOB DETAILS</div>
    }
    if(direction === TRUCKS.route){
        return <div>THIS IS JOB DETAILS</div>
    }
    return <Navigate to={'/*'}/>
}

export default Details