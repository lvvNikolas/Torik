import { Link } from "react-router-dom"
import { VIP, NOVIP, SUPERVIP} from "../../constants/vip_status"
import './vip_status.css'

export const VipStatusSign = ({status}) =>{
    if(status === NOVIP){
        return null
    }
    if(status === VIP){
        return <div className="vip-sign status-sign">
            <p className="vip-sign__title">vip</p>
            <Link className="status-sign__details-link">Подробнее о статусах</Link>
        </div>
    }
    if(status === SUPERVIP){
        return <div className="supervip-sign status-sign">
            <p className="supervip-sign__title">super vip</p>
            <Link className="status-sign__details-link">Подробнее о статусах</Link>
        </div>
    }
    return null
}
