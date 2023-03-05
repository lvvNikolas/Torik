import { useSelector } from "react-redux"
import { Navigate, useParams, useRoutes } from "react-router-dom"
import JobDetails from "../../components/jobs/jobs_details"
import { publicRoutes } from "../../constants/routes"

// TODO Заменить дивы на details для разных страниц
const Details = ({direction}) =>{
    const {JOBS,ESTATE,SERVICES,TRUCKS} = publicRoutes
    const {jobId} = useParams()
    const {trucksId} = useParams()

    console.log(direction, jobId, trucksId)
    if(direction === JOBS.route){
        return <JobDetails/>
    }
    if(direction === ESTATE.route){
        return <div>THIS IS JOB DETAILS</div>
    }
    if(direction === SERVICES.route){
        return <div>THIS IS JOB DETAILS</div>
    }
    if(direction === TRUCKS.route){
        return <div>THIS IS Trucks DETAILS</div>
    }
    return <Navigate to={'/*'}/>
}

export default Details