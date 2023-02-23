import { useState } from "react"
import CategoriesGroupe from "../../components/adsForm/categories_groupe"
import FormContainer from "../../components/adsForm/form_container";
import { WORK_CATEGORY, RENT_CATEGORY, BUISNESS_CATEGORY, TRUCK_CATEGORY } from "../../constants/categories"
import './ads_form.css';

const categoriesArr = [
    {
        id:WORK_CATEGORY,
        title:"Работа",
        isActive:true
    },
    {
        id:RENT_CATEGORY,
        title:"Жилье",
        isActive:false
    },
    {
        id:BUISNESS_CATEGORY,
        title:"Бизнесы",
        isActive:false
    },
    {
        id:TRUCK_CATEGORY,
        title:"Траки",
        isActive:false
    },
]
const AdsForm = () => {

    const [categories, setCategories] = useState(categoriesArr)

    return(
        <div className="adsForm">
            <CategoriesGroupe data={categories} setData = {setCategories}/>
            <FormContainer data={categories}/>
        </div>
    )
}

export default AdsForm