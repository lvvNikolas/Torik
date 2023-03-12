import { useParams } from "react-router-dom"
import { placeHolderData } from "../../../firebase/firebase_exampe"
import DetailsDescription from "../../../components/details/details_description"
import DetailsSide from "../../../components/details/details_side"
import JobDetailsHeader from "../../../components/jobs/jobs_details_header"
import './job_details.css'
import DetailsBanner from "../../../components/details/details_banner"
import { useEffect } from "react"

const JobDetails = () =>{

  
  //TODO Id динамический передается из роутера при клике на карточку
    const {jobId} = useParams()
    // TODO заменить данные из плейсхолдера на данные из store внутри redux
    const jobArray =placeHolderData.JobPage.Jobs
   
    //Находим в массиве работ, объект нужной (кликнутой работы)
    const data = jobArray.find(el => el.Id === jobId)
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="JobDetails">
            <div className="JobDetails__container">
                <div className="JobDetails__content">
                    <JobDetailsHeader data={data}/>
                    <DetailsDescription description={data.JobDescription}/>
                </div>
                <div className="jobDetailsSide">
                    <DetailsSide data={data}/>
                </div>
            </div>
            <DetailsBanner/>
            {/* Relative ads here */}
        </div>
    )
}

export default JobDetails