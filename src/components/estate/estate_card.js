import { useNavigate } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"
import { VipStatusSign } from "../vip-status/vip_status"

const EstateCard = ({data}) =>{

    const {
        Id,
        EstateTitle,
        Price,
        EstateDescription,
        Date,
        AdsStatus,
        EstatePoster,
        Category,
        ShortEstateDescription
    } = data

    const nav = useNavigate()

    const handleNavigate = () =>{
        nav(`${publicRoutes.ESTATE.route}/${Id}`)
    }
    const descHtml = {
        __html: ShortEstateDescription
    }

    return (
        <div className="estatePage__card" onClick={handleNavigate}>
            <img src={EstatePoster} className = "estatePage__card-img"/>
            <div className="estatePage__card-text-content">
                <h2 className="estatePage__card-title">{EstateTitle}</h2>
                <p className="estatePage__card-price">{Price}</p>
                <p className="estatePage__card-desc" dangerouslySetInnerHTML={descHtml}/>
                <div className="estatePage__card-extra">
                    <p className="estatePage__card-date">{Date}</p>
                    <p className="estatePage__card-category">{Category}</p>
                    <VipStatusSign status={AdsStatus}/>
                </div>
            </div>
            
        </div>
    )
}

export default EstateCard