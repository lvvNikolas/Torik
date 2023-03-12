import { Field, Formik } from "formik"
import { useState } from "react"
import Pricing from "./pricing"

const ServicesForm = () =>{
    const [extend, setExtend] = useState(false)
    
    const initialValues = {
        serviceTitle:'',
        serviceDescription:'',
        serviceCity:'',
        serviceOwnerName:'',
        serviceOwnerPhone:'',
        setviceOwnerMail:'',
        servicesPlans:''
    }

    const formSubmit = values => {
        // console.log(values)
    }

    const handleExtend = () => {
        setExtend(p => !p)
    }

    const handleExtendText = () => {
        return extend ? "Меньше параметров" : "Больше параметров"
    }

    const handleExtendStyle = () => {
        return extend ? "adsForm__extend-container" : "adsForm__extend-container adsForm__extend-container--close"
    }
    
    return(
        <Formik initialValues={initialValues} onSubmit={formSubmit}>
        {
            ({ values, handleSubmit, handleChange }) => <form className="adsForm__form" onSubmit={handleSubmit}>

<label className="adsForm-label" htmlFor="serviceTitleId">Название компании<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'serviceTitleId'}
                        name={'serviceTitle'}
                        placeholder="Адвокат Иванов Сергей"
                        onChange={handleChange}
                        value={values.serviceTitle}
                    />

<label className="adsForm-label" htmlFor="serviceDescriptionId">Описание объявления<span>*</span></label>
                    <Field
                        as="textarea"
                        id={'serviceDescriptionId'}
                        name={'serviceDescription'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.serviceDescription}
                        placeholder="Индивидуальная практика"
                    />
                    
                    <label className="adsForm-label" htmlFor="serviceCityId">Адрес<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'serviceCityId'}
                        name={'serviceCity'}
                        placeholder="Лос-Анжелес, Оранж стрит 27"
                        onChange={handleChange}
                        value={values.serviceCity}
                    />

<label className="adsForm-label" htmlFor="serviceOwnerNameId">Контактное лицо<span>*</span></label>
                    <Field
                    type = {'text'}
                        id={'serviceOwnerNameId'}
                        name={'serviceOwnerName'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.serviceOwnerName}
                        placeholder="Иванов Сергей"
                    />
                    
<label className="adsForm-label" htmlFor="serviceOwnerPhoneId">Телефон<span>*</span></label>
                    <Field
                    type = {'phone'}
                        id={'serviceOwnerPhoneId'}
                        name={'serviceOwnerPhone'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.serviceOwnerPhone}
                        placeholder="+19239123123"
                    />

<label className="adsForm-label" htmlFor="setviceOwnerMailId">Почта<span>*</span></label>
                    <Field
                    type = {'email'}
                        id={'setviceOwnerMailId'}
                        name={'setviceOwnerMail'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.setviceOwnerMail}
                        placeholder="user@gmail.com"
                    />

                  {/* Доп форма */}
                    <button type="button" onClick={handleExtend} className = {'adsForm__more-btn'}>
                        {handleExtendText()}
                    </button>
                    
                    <div className={handleExtendStyle()}>
                    <label className="adsForm-label" htmlFor="rentOwnerTgId">Ccылка на телеграм<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentOwnerTgId'}
                        name={'rentOwnerTg'}
                        placeholder="https://t.me/@link"
                        onChange={handleChange}
                        value={values.rentOwnerTg}
                    />
                    </div>

                    <Pricing adsType={"SERVICES"}/>
                    
                    <button type="submit" className="adsForm_submit active_btn">Отправить</button>
            </form>
        }
    </Formik>
    )
}

export default ServicesForm