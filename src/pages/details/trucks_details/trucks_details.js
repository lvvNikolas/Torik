import { useParams } from "react-router-dom"
import { placeHolderData } from "../../../firebase/firebase_exampe"
import DetailsDescription from "../../../components/details/details_description"
import DetailsSide from "../../../components/details/details_side"
import TrucksDetailsHeader from "../../../components/trucks/TrucksDetailsHeader"
import './trucks_details.css'
import DetailsBanner from "../../../components/details/details_banner"
import { useEffect } from "react"

const TrucksDetails = () =>{

  
  //TODO Id динамический передается из роутера при клике на карточку
    const {trucksId} = useParams()
    // TODO заменить данные из плейсхолдера на данные из store внутри redux
    const trucksArray =placeHolderData.TrucksPage.Trucks
   
    //Находим в массиве траков, объект нужной (кликнутой работы)
    const data = trucksArray.find(el => el.Id === trucksId)
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="TrucksDetails">
            <div className="TrucksDetails__container">
                <div className="TrucksDetails__content">
                    <TrucksDetailsHeader data={data}/>
                    <DetailsDescription description={data.TrucksDescription}/>
                </div>
                <div className="TrucksDetailsSide">
                    <DetailsSide data={data}/>
                </div>
            </div>
            <DetailsBanner/>
            {/* Relative ads here */}
        </div>
    )
}

export default TrucksDetails