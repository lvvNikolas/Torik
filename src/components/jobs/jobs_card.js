import { useNavigate } from "react-router-dom"
import { VipStatusSign } from "../vip-status/vip_status"

const JobsCard = ({data}) =>{

    const {
        Id,
        JobTitle,
        Price,
        JobDescription,
        Date,
        AdsStatus,
        Category
    } = data

    const nav = useNavigate()

    const handleNavigate = () =>{
        nav(`/jobs/${Id}`)
    }

    return (
        <div className="jobPage__card" onClick={handleNavigate}>
            <h2 className="jobPage__card-title">{JobTitle}</h2>
            <p className="jobPage__card-price">{Price}</p>
            <p className="jobPage__card-desc">{JobDescription}</p>
            <div className="jobPage__card-extra">
                <p className="jobPage__card-date">{Date}</p>
                <p className="jobPage__card-category">{Category}</p>
                <VipStatusSign status={AdsStatus}/>
            </div>
        </div>
    )
}

export default JobsCard