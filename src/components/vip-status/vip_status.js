import { Link } from "react-router-dom"
import { VIP, NOVIP, SUPERVIP} from "../../constants/vip_status"
import './vip_status.css'

export const VipStatusSign = ({status, size = 'm'}) =>{

    const widthHandler = () => {
        return size !== 'm' ? {
            maxWidth:'fit-content',
        } : null
    }

    if(status === NOVIP){
        return null
    }
    if(status === VIP){
        return <div className="vip-sign status-sign" style={widthHandler()}>
            <p className="vip-sign__title">vip</p>
            <Link className="status-sign__details-link">Подробнее о статусах</Link>
        </div>
    }
    if(status === SUPERVIP){
        return <div className="supervip-sign status-sign" style={widthHandler()}>
            <p className="supervip-sign__title">super vip</p>
            <Link className="status-sign__details-link">Подробнее о статусах</Link>
        </div>
    }
    return null
}
