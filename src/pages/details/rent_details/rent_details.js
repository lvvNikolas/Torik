import { useParams } from "react-router-dom";
import { placeHolderData } from "../../../firebase/firebase_exampe";
import DetailsDescription from "../../../components/details/details_description";
import DetailsSide from "../../../components/details/details_side";
import "./rent_details.css";
import EstateDetailsHeader from "../../../components/estate/estate_details_header";
import EstatePhotos from "../../../components/estate/estate_photos";
import DetailsBanner from "../../../components/details/details_banner";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const RentDetails = () => {
  //TODO Id динамический передается из роутера при клике на карточку
  const { estateId } = useParams();

  const dataArr = useSelector((state) => state.rent);

  //Находим в массиве ренты, объект нужной (кликнутой работы)
  const data = dataArr.find((el) => el.Id === estateId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    dataArr.length > 0 && (
      <div className="EstateDetails">
        <div className="EstateDetails__container">
          <div className="EstateDetails__content">
            <EstatePhotos data={data} />
            <EstateDetailsHeader data={data} />
            <DetailsDescription description={data.EstateDescription} />
          </div>
          <div className="EstateDetailsSide">
            <DetailsSide data={data} />
          </div>
        </div>
        <DetailsBanner />
        {/* Relative ads here */}
      </div>
    )
  );
};

export default RentDetails;
