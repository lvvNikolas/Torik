import { Field, Formik } from "formik"
import { useState } from "react"
import Pricing from "./pricing"

const TrucksForm = () =>{
    const [extend, setExtend] = useState(false)
    
    const initialValues = {
        trucksTitle:'',
        trucksDescription:'',
        trucksCity:'',
        trucksOwnerName:'',
        trucksOwnerPhone:'',
        trucksOwnerMail:'',
        trucksPlans:''
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

<label className="adsForm-label" htmlFor="trucksTitleId">Название компании<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksTitleId'}
                        name={'trucksTitle'}
                        placeholder="Горные Дьяволы Доставка грузов по всей стране"
                        onChange={handleChange}
                        value={values.trucksTitle}
                    />

<label className="adsForm-label" htmlFor="trucksDescriptionId">Описание объявления<span>*</span></label>
                    <Field
                        as="textarea"
                        id={'trucksDescriptionId'}
                        name={'trucksDescription'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.trucksDescription}
                        placeholder="Мы предлагаем вам доставку грузов по всей стране. Мы работаем с 2000 года."
                    />
                    
                    <label className="adsForm-label" htmlFor="trucksCityId">Адрес<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksCityId'}
                        name={'trucksCity'}
                        placeholder="Лос-Анжелес, Оранж стрит 27"
                        onChange={handleChange}
                        value={values.serviceCity}
                    />

<label className="adsForm-label" htmlFor="trucksOwnerNameId">Контактное лицо<span>*</span></label>
                    <Field
                    type = {'text'}
                        id={'trucksOwnerNameId'}
                        name={'trucksOwnerName'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.trucksOwnerName}
                        placeholder="Иванов Сергей"
                    />
                    
<label className="adsForm-label" htmlFor="trucksOwnerPhoneId">Телефон<span>*</span></label>
                    <Field
                    type = {'phone'}
                        id={'trucksOwnerPhoneId'}
                        name={'trucksOwnerPhone'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.trucksOwnerPhone}
                        placeholder="+19239123123"
                    />

<label className="adsForm-label" htmlFor="trucksOwnerMailId">Почта<span>*</span></label>
                    <Field
                    type = {'email'}
                        id={'trucksOwnerMailId'}
                        name={'trucksOwnerMail'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.trucksOwnerMail}
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

export default TrucksForm