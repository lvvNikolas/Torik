import { useFormik, Formik, Field } from "formik"
import React, { useEffect, useRef, useState } from "react"
import { JOB_CATEGORIES, JOB_REQUIREMENTS, JOB_TIME } from "../../constants/job"
import { cities } from "../../constants/cities"



const JobForm = () => {
    const [extend, setExtend] = useState(false)
    const ref = useRef(null)

    const initialValues = {
        jobCategory: JOB_CATEGORIES[0].id,
        jobTitle: '',
        jobLocation: cities[0].id,
        jobDescription: '',
        jobOwnername: '',
        jobOwnerEmail: '',
        jobOwnerPhone: '',
        jobAdress: '',
        jobCompanyName: '',
        jobSalary: '',
        jobExtra: [],
        jobTime: '',
    }

    const formSubmit = (values) => {
        console.log(values)
    }

    const handleExtend = () => {
        setExtend(p => !p)
    }

    const handleExtendText = () => {
        return extend ? "Меньше параметров" : "Больше параметров"
    }

    const handleExtendStyle = () =>{
        return extend ? "adsForm__extend-container" : "adsForm__extend-container adsForm__extend-container--close"
    }


    return (
        <Formik initialValues={initialValues} onSubmit={formSubmit}>
            {
                ({ values, handleSubmit, handleChange }) =>
                    // Основная форма

                    <form className="adsForm__form" onSubmit={handleSubmit}>
                        <label className="adsForm-label" htmlFor="jobCatId">Категория <span>*</span></label>
                        <Field
                            as='select'
                            className={"adsForm_input"}
                            id={'jobCatId'}
                            name="jobCategory"
                            onChange={handleChange}
                            value={values.jobCategory}>
                            {
                                JOB_CATEGORIES.map((e, i) => <option
                                    key={i}
                                    value={e.id}
                                >{e.title}</option>)
                            }
                        </Field>

                        <label className="adsForm-label" htmlFor="jobTitleId">Заголовок<span>*</span></label>
                        <Field
                            className={"adsForm_input"}
                            type={'text'}
                            id={'jobTitleId'}
                            name={'jobTitle'}
                            placeholder="Заголовок объявления"
                            onChange={handleChange}
                            value={values.jobTitle}
                        />

                        <label className="adsForm-label" htmlFor="jobLocId">Местоположение<span>*</span></label>
                        <Field
                            as="select"
                            className={"adsForm_input"}
                            id={'jobLocId'}
                            name="jobLocation"
                            onChange={handleChange}
                            value={values.jobLocation}>
                            {
                                cities.map((e, i) => <option
                                    key={i}
                                    value={e.id}
                                >{e.title}</option>)
                            }
                        </Field>

                        <label className="adsForm-label" htmlFor="jobDescId">Описание вакансии<span>*</span></label>
                        <Field
                            as="textarea"
                            id={'jobDescId'}
                            name={'jobDescription'}
                            className={"adsForm_input"}
                            onChange={handleChange}
                            value={values.jobDescription}
                        />

                        <label className="adsForm-label" htmlFor="jobOwnernameId">Имя конакта</label>
                        <Field
                            placeholder="Иван Петров"
                            id={'jobOwnernameId'}
                            name={'jobOwnername'}
                            className={"adsForm_input"}
                            onChange={handleChange}
                            value={values.jobOwnername}
                        />

                        <label className="adsForm-label" htmlFor=" jobOwnerEmailId">Электронная почта<span>*</span></label>
                        <Field
                            placeholder="your-email@gmail.com"
                            type="email"
                            id={'jobOwnerEmailId'}
                            name={'jobOwnerEmail'}
                            className={"adsForm_input"}
                            onChange={handleChange}
                            value={values.jobOwnerEmail}
                        />

                        <label className="adsForm-label" htmlFor="  jobOwnerPhoneId">Контактный телефон<span>*</span></label>
                        <Field
                            placeholder="8083651221"
                            type="phone"
                            id={'jobOwnerPhoneId'}
                            name={'jobOwnerPhone'}
                            className={"adsForm_input"}
                            onChange={handleChange}
                            value={values.jobOwnerPhone}
                        />

                        {/* Доп форма */}
                        <button type="button" onClick={handleExtend}>
                            {handleExtendText()}
                        </button>

                        {
                           <div className={handleExtendStyle()} ref = {ref}>

                                <label className="adsForm-label" htmlFor=" jobAdressId">Адрес васкансии</label>
                                <Field
                                    className={"adsForm_input"}
                                    type={'text'}
                                    id={' jobAdressId'}
                                    name={'jobAdress'}
                                    placeholder="Arthurs's st. 29"
                                    onChange={handleChange}
                                    value={values.jobAdress}
                                />

                                <label className="adsForm-label" htmlFor="jobCompanyNameId">Имя компании</label>
                                <Field
                                    className={"adsForm_input"}
                                    type={'text'}
                                    id={'jobCompanyNameId'}
                                    name={'jobCompanyName'}
                                    placeholder="Ivan and Partners"
                                    onChange={handleChange}
                                    value={values.jobCompanyName}
                                />

                                <label className="adsForm-label" htmlFor="jobSalaryId">Зарплата в час</label>
                                <Field
                                    className={"adsForm_input"}
                                    type={'text'}
                                    id={'jobSalaryId'}
                                    name={'jobSalary'}
                                    placeholder="3000"
                                    onChange={handleChange}
                                    value={values.jobSalary}
                                />

                                <div role={'group'} aria-labelledby="checkbox-group" className="adsForm__checkboxes">
                                    {
                                        JOB_REQUIREMENTS.map((e, i) => (
                                            <label>
                                                <Field key={i} type="checkbox" name="jobExtra" value={e.id} />
                                                {e.title}
                                            </label>
                                        ))
                                    }
                                </div>

                                <div role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="jobTime" value={JOB_TIME.fullTime} />
                                        Полный день
                                    </label>
                                    <label>
                                        <Field type="radio" name="jobTime" value={JOB_TIME.partTime} />
                                        Частичная занятость
                                    </label>
                                </div>
                            </div>
                        }

                        <button type="submit">Отправить</button>
                    </form>
            }
        </Formik>
    )
}

export default JobForm

