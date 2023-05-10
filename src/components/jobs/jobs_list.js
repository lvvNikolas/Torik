import { useEffect, useState } from "react";
import { CITIES } from "../../constants/cities";
import { JOB_CATEGORIES } from "../../constants/job";
import { placeHolderData } from "../../firebase/firebase_exampe";
import ListFilterSelect from "../list_filter_select.js/list_filter_select";
import ListFilterToggler from "../list_filter_toggler/list_filter_toggler";
import JobsCard from "./jobs_card";
import { useSelector } from "react-redux";
import CardLoader from "../loaders/cardsLoader/cardsLoader";

const cities = CITIES;
const jobCategories = JOB_CATEGORIES;

const JobList = ({ loading }) => {
  const data = useSelector((state) => state.jobs);
  const [filteredData, setFilteredData] = useState([]);

  const [sorting, setSorting] = useState([
    {
      title: "Вакансии",
      isActive: true,
    },
    {
      title: "Резюме",
      isActive: false,
    },
  ]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const [location, setLocation] = useState({
    id: cities[0].id,
    title: cities[0].title,
  });
  const [category, setCategory] = useState({
    id: jobCategories[0].id,
    title: jobCategories[0].title,
  });

  const applyFilters = () => {
    location.id === cities[0].id && category.id === jobCategories[0].id
      ? setFilteredData(data)
      : setFilteredData(filterData(data));
  };

  const filterData = (data) => {
    if (location.id === cities[0].id && category.id !== jobCategories[0].id) {
      return data.filter((item) => {
        const { Category } = item;
        return Category === category.id && item;
      });
    } else if (
      category.id === jobCategories[0].id &&
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
      <h1 className="jobsPage__title">Работа в {location.title}</h1>
      <div className="jobsPage__body">
        <div className="jobPage__filters jobPage__column">
          <ListFilterSelect
            state={location}
            setState={setLocation}
            dataList={cities}
          />

          <ListFilterSelect
            state={category}
            setState={setCategory}
            dataList={jobCategories}
          />

          <button
            className="jobPage__filters-btn active_btn"
            onClick={applyFilters}
            type="button"
          >
            Применить
          </button>

          {/* <ListFilterToggler state={sorting} setState={setSorting} /> */}
        </div>
        <div className="jobPage__list jobPage__column">
          {loading ? (
            <CardLoader />
          ) : (
            filteredData.map((e, i) => <JobsCard key={i} data={e} />)
          )}
        </div>
        <div className="jobPage__ads jobPage__column">
          <div className="jobPage__ads-banner">реклама</div>
        </div>
      </div>
    </>
  );
};

export default JobList;
