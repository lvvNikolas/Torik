import { Formik, Field } from "formik"
import { useState } from "react"
import { TRUCKS_CATEGORIES } from "../../constants/trucks"
import Pricing from "./pricing"

//TODO ADD PHOTO DRAG AND DROP FORM
const TrucksForm = () => {
    const [extend, setExtend] = useState(false)

    const initialValues = {
        trucksCategory: TRUCKS_CATEGORIES[0].title,
        trucksTitle: '',
        trucksDescription: '',
        trucksAdress: '',
        trucksOwnerName: '',
        trucksOwnerPhone: '',
        trucksOwnerEmail: '',
        trucksPrice: '',
        trucksOwnerTg:'',
        trucksPlans:''
    }

    const formSubmit = values => {
        console.log(values)
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

    return (
        <Formik initialValues={initialValues} onSubmit={formSubmit}>
            {
                ({ values, handleSubmit, handleChange }) => <form className="adsForm__form" onSubmit={handleSubmit}>

                    <label className="adsForm-label" htmlFor="trucksCategoryId">Категория <span>*</span></label>
                    <Field
                        as='select'
                        className={"adsForm_input"}
                        id={'trucksCategoryId'}
                        name="trucksCategory"
                        onChange={handleChange}
                        value={values.trucksCategory}>
                        {
                            TRUCKS_CATEGORIES.map((e, i) => <option
                                key={i}
                                value={e.id}
                            >{e.title}</option>)
                        }
                    </Field>

                    <label className="adsForm-label" htmlFor="trucksTitleId">Заголовок <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksTitleId'}
                        name={'trucksTitle'}
                        placeholder="Заголовок объявления"
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
                        placeholder="Просторный холл, уютная кухня"
                    />

                    <label className="adsForm-label" htmlFor="trucksAdressId">Адрес<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksAdressId'}
                        name={'trucksAdress'}
                        placeholder="Лос-Анджелес, Оранж стрит 27"
                        onChange={handleChange}
                        value={values.trucksAdress}
                    />

                    <label className="adsForm-label" htmlFor="trucksOwnerNameId">Имя <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksOwnerNameId'}
                        name={'trucksOwnerName'}
                        placeholder="Иван Петров"
                        onChange={handleChange}
                        value={values.trucksOwnerName}
                    />

                    <label className="adsForm-label" htmlFor="trucksOwnerPhoneId">Телефон для связи <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksOwnerPhoneId'}
                        name={'trucksOwnerPhone'}
                        placeholder="Иван Петров"
                        onChange={handleChange}
                        value={values.trucksOwnerPhone}
                    />

                    <label className="adsForm-label" htmlFor="trucksOwnerEmailId">Электронная почта <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksOwnerEmailId'}
                        name={'trucksOwnerEmail'}
                        placeholder="Иван Петров"
                        onChange={handleChange}
                        value={values.trucksOwnerEmail}
                    />

                    <label className="adsForm-label" htmlFor="trucksPriceId">Цена услуги<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksPriceId'}
                        name={'trucksPrice'}
                        placeholder="3000$"
                        onChange={handleChange}
                        value={values.trucksPrice}
                    />
                   
                    {/* Доп форма */}
                    <button type="button" onClick={handleExtend} className = {'adsForm__more-btn'}>
                        {handleExtendText()}
                    </button>
                    
                    <div className={handleExtendStyle()}>
                    <label className="adsForm-label" htmlFor="trucksOwnerTgId">Ccылка на телеграм<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'trucksOwnerTgId'}
                        name={'trucksOwnerTg'}
                        placeholder="https://t.me/@link"
                        onChange={handleChange}
                        value={values.trucksOwnerTg}
                    />
                    </div>

                    <Pricing adsType={"TRUCKS"}/>
                    
                    <button type="submit" className="adsForm_submit active_btn">Отправить</button>
                </form>
            }
        </Formik>
    )
}

export default TrucksForm