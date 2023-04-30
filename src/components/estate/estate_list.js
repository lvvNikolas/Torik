import { useState } from "react";
import { CITIES } from "../../constants/cities";
import { RENT_CATEGORIES } from "../../constants/rent";
import { placeHolderData } from "../../firebase/firebase_exampe";
import ListFilterSelect from "../list_filter_select.js/list_filter_select";
import ListFilterToggler from "../list_filter_toggler/list_filter_toggler";
import EstateCard from "./estate_card";
import estateCard from "./estate_card";
import { useSelector } from "react-redux";
import CardLoader from "../loaders/cardsLoader/cardsLoader";

const cities = CITIES;
const rentCategories = RENT_CATEGORIES;

const EstateList = ({ loading }) => {
  console.log(loading);
  const data = useSelector((state) => state.rent);
  const [filteredData, setFilteredData] = useState(data);

  const [sorting, setSorting] = useState([
    {
      title: "Сдам",
      isActive: true,
    },
    {
      title: "Сниму",
      isActive: false,
    },
  ]);

  const [location, setLocation] = useState({
    id: cities[0].id,
    title: cities[0].title,
  });
  const [category, setCategory] = useState({
    id: rentCategories[0].id,
    title: rentCategories[0].title,
  });

  const applyFilters = () => {
    location.id === cities[0].id && category.id === rentCategories[0].id
      ? setFilteredData(data)
      : setFilteredData(filterData(data));
  };

  const filterData = (data) => {
    if (location.id === cities[0].id && category.id !== rentCategories[0].id) {
      return data.filter((item) => {
        const { Category } = item;
        return Category === category.id && item;
      });
    } else if (
      category.id === rentCategories[0].id &&
      location.id !== cities[0].id
    ) {
      return data.filter((item) => {
        const { City } = item;
        return City === location.id && item;
      });
    } else {
      return data.filter((item) => {
        const { City, Category } = item;
        return City === location.id && Category === category.id && item;
      });
    }
  };

  return (
    <>
      <h1 className="estatePage__title">Жилье в {location.title}</h1>
      <div className="estatePage__body">
        <div className="estatePage__filters estatePage__column">
          <ListFilterSelect
            state={location}
            setState={setLocation}
            dataList={cities}
          />

          <ListFilterSelect
            state={category}
            setState={setCategory}
            dataList={rentCategories}
          />

          <button
            className="estatePage__filters-btn active_btn"
            type="button"
            onClick={applyFilters}
          >
            Применить
          </button>

          {/* <ListFilterToggler state={sorting} setState={setSorting} /> */}
        </div>
        <div className="estatePage__list estatePage__column">
          {loading ? (
            <CardLoader />
          ) : (
            filteredData.map((e, i) => <EstateCard key={i} data={e} />)
          )}
        </div>
        <div className="estatePage__ads estatePage__column">
          <div className="estatePage__ads-banner">реклама</div>
        </div>
      </div>
    </>
  );
};

export default EstateList;
