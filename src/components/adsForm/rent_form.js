import { Formik, Field } from "formik"
import { useState } from "react"
import { RENT_CATEGORIES } from "../../constants/rent"
import Pricing from "./pricing"

//TODO ADD PHOTO DRAG AND DROP FORM
const RentForm = () => {
    const [extend, setExtend] = useState(false)

    const initialValues = {
        rentCategory: RENT_CATEGORIES[0].title,
        rentTitle: '',
        rentDescription: '',
        rentAdress: '',
        rentOwnerName: '',
        rentOwnerPhone: '',
        renеOwnerEmail: '',
        rentPrice: '',
        rentOwnerTg:''
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

                    <label className="adsForm-label" htmlFor="rentCategoryId">Категория <span>*</span></label>
                    <Field
                        as='select'
                        className={"adsForm_input"}
                        id={'rentCategoryId'}
                        name="rentCategory"
                        onChange={handleChange}
                        value={values.rentCategory}>
                        {
                            RENT_CATEGORIES.map((e, i) => <option
                                key={i}
                                value={e.id}
                            >{e.title}</option>)
                        }
                    </Field>

                    <label className="adsForm-label" htmlFor="rentTitleId">Заголовок <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentTitleId'}
                        name={'rentTitle'}
                        placeholder="Заголовок объявления"
                        onChange={handleChange}
                        value={values.rentTitle}
                    />

                    <label className="adsForm-label" htmlFor="rentDescriptionId">Описание недвижимости<span>*</span></label>
                    <Field
                        as="textarea"
                        id={'rentDescriptionId'}
                        name={'rentDescription'}
                        className={"adsForm_input"}
                        onChange={handleChange}
                        value={values.rentDescription}
                        placeholder="Просторный холл, уютная кухня"
                    />

                    <label className="adsForm-label" htmlFor="rentAdressId">Адрес<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentAdressId'}
                        name={'rentAdress'}
                        placeholder="Лос-Анджелес, Оранж стрит 27"
                        onChange={handleChange}
                        value={values.rentAdress}
                    />

                    <label className="adsForm-label" htmlFor="rentOwnerNameId">Имя <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentOwnerNameId'}
                        name={'rentOwnerName'}
                        placeholder="Иван Петров"
                        onChange={handleChange}
                        value={values.rentOwnerName}
                    />

                    <label className="adsForm-label" htmlFor="rentOwnerPhoneId">Телефон для связи <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentOwnerPhoneId'}
                        name={'rentOwnerPhone'}
                        placeholder="Иван Петров"
                        onChange={handleChange}
                        value={values.rentOwnerPhone}
                    />

                    <label className="adsForm-label" htmlFor="rentOwnerEmailId">Электронная почта <span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentOwnerEmailId'}
                        name={'rentOwnerEmail'}
                        placeholder="Иван Петров"
                        onChange={handleChange}
                        value={values.rentOwnerEmail}
                    />

                    <label className="adsForm-label" htmlFor="rentPriceId">Арендная плата<span>*</span></label>
                    <Field
                        className={"adsForm_input"}
                        type={'text'}
                        id={'rentPriceId'}
                        name={'rentPrice'}
                        placeholder="3000$"
                        onChange={handleChange}
                        value={values.rentPrice}
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

                    <Pricing adsType={"RENT"}/>
                    
                    <button type="submit">Отправить</button>
                </form>
            }
        </Formik>
    )
}

export default RentForm