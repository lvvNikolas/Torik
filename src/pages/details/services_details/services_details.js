import { useParams } from "react-router-dom"
import { placeHolderData } from "../../../firebase/firebase_exampe"
import DetailsDescription from "../../../components/details/details_description"
import DetailsSide from "../../../components/details/details_side"
import ServicesDetailsHeader from "../../../components/services/ServicesDetailsHeader"
import './services_details.css'
import DetailsBanner from "../../../components/details/details_banner"
import { useEffect } from "react"

const ServicesDetails = () =>{

  
  //TODO Id динамический передается из роутера при клике на карточку
    const {servicesId} = useParams()
    // TODO заменить данные из плейсхолдера на данные из store внутри redux
    const servicesArray =placeHolderData.ServicesPage.Services

    const data = servicesArray.find(el => el.Id === servicesId)
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="ServicesDetails">
            <div className="ServicesDetails__container">
                <div className="ServicesDetails__content">
                    <ServicesDetailsHeader data={data}/>
                    <DetailsDescription description={data.ServicesDescription}/>
                </div>
                <div className="ServicesDetailsSide">
                    <DetailsSide data={data}/>
                </div>
            </div>
            <DetailsBanner/>
            {/* Relative ads here */}
        </div>
    )
}

export default ServicesDetails