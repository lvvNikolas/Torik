import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
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

    const nav = useNavigate()
    const [categories, setCategories] = useState(categoriesArr)

    const handleReturn = () =>{
        nav(-1)
    }
    return(
        <div className="adsForm">
            <button type="button" className = "adsForm__back back__btn active_link" onClick={handleReturn}>Назад</button>
            <h2 className = "adsForm__form-title">Добавить объявление</h2>
            <h3 className = "adsForm__form-sub-title">Тип объявления</h3>
            <CategoriesGroupe data={categories} setData = {setCategories}/>
            <FormContainer data={categories}/>
        </div>
    )
}

export default AdsForm