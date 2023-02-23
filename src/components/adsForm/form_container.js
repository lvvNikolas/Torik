import JobForm from "./job_form"
import WorkForm from "./job_form"


const FormContainer = ({data}) =>{

    const forms = [
        <JobForm/>,
    ]
    const idFormHandler = () =>{
        return data.filter(e => e.isActive)[0].id
    }
   
    return(
        <div className="adsForm__form-container">
            <h2 className="adsForm__form-title"></h2>
            <p>Отмеченные "*" пункты обязательны для заполнения</p>
            {
              
                data && forms[idFormHandler()]
            }
        </div>
    )
}

export default FormContainer