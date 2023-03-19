import JobForm from "./job_form"
import WorkForm from "./job_form"
import RentForm from "./rent_form"
import ServicesForm from "./services_form"
import TrucksForm from "./trucks_form"


const FormContainer = ({data}) =>{

    const forms = [
        <JobForm/>,
        <RentForm/>,
        <ServicesForm/>,
        <TrucksForm/>
    ]
    const idFormHandler = () =>{
        return data.filter(e => e.isActive)[0].id
    }
   
    return(
        <div className="adsForm__form-container">
            <p className="adsForm__form-note">Отмеченные "*" пункты обязательны для заполнения</p>
            {
                data && forms[idFormHandler()]
            }
        </div>
    )
}

export default FormContainer