import MainCategoryCard from "./main_category_card"
import './main_category.css'

const MainCategoryCards = ({routesArr}) => {

    return(
        <div className="MainCategory__container">
        <h2 className="section__title MainCategory__title"> Категории</h2>
        <div className="MainCategory__content">
          
            {
                routesArr.map((route,i) => <MainCategoryCard 
                routeObj={route}
                key = {i}/>)
            } 
        </div>
        </div>
    )
}

export default MainCategoryCards