import { useFormik, Formik, Field } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  JOB_CATEGORIES,
  JOB_REQUIREMENTS,
  JOB_TIME,
} from "../../constants/job";

import { createJobAdsObject } from "../../utils/helpers/ads_object_creators";
import {
  setAdsToBacklog,
  setAdsToCollection,
} from "../../utils/set_ads_to_firebase/setAdsToFirebase";
import Popup from "../popup/popup";
import { usePopup } from "../../hooks/usePopup";
import { PricingPlansJob } from "../../constants/pricing";
import {
  validateEmail,
  validateTextInput,
} from "../../utils/validators/validators";
import { CITIES } from "../../constants/cities";
import Pricing from "../adsForm/pricing";

const AdminForm = ({ initialValues, inputTexts, collectionName }) => {
  const [extend, setExtend] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const ref = useRef(null);
  const { showPopup } = usePopup();

  console.log(collectionName);
  const formSubmit = async (values) => {
    const data = {
      ...values,
      userId: values.ownerEmail,
    };
    //Добавляем в файрбейс
    setIsSending(true);

    const { result, error } = await setAdsToCollection(collectionName, data);
    if (error) {
      console.log(error);
      showPopup("Ошибка");
    } else {
      showPopup("Ваше объявление отправлено :)", 2000);
    }
    setIsSending(false);
  };

  const handleExtend = () => {
    setExtend((p) => !p);
  };

  const handleExtendText = () => {
    return extend ? "Меньше параметров" : "Больше параметров";
  };

  const handleExtendStyle = () => {
    return extend
      ? "adsForm__extend-container"
      : "adsForm__extend-container adsForm__extend-container--close";
  };

  console.log(initialValues);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      enableReinitialize
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        // Основная форма

        <form className="adsForm__form" onSubmit={handleSubmit}>
          {renderForm(initialValues, inputTexts, handleChange, values)}
          <button
            type={isSending ? "button" : "submit"}
            className="adsForm_submit active_btn"
          >
            {isSending ? <span className="btn-loader"></span> : "Отправить"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AdminForm;

//Универсальный рендер формы на основе значений из formik initialValues
//type - тип формы по умолчанию для юзера (скрывает системные инпуты)
const renderForm = (object, inputsTexts, handleChange, values) => {
  return Object.keys(object).map((key, i) => (
    <>
      <label className="adsForm-label" htmlFor={`${key}Id`}>
        {inputsTexts[key].name}
        <span>*</span>
      </label>
      {handleField(key, handleChange, values)}
    </>
  ));
};

//Конструктор полей на основе формы
const handleField = (key, handleChange, values) => {
  if (key === "category") {
    return (
      <Field
        as="select"
        className={"adsForm_input"}
        id={`${key}Id`}
        name={key}
        onChange={handleChange}
        value={values.category}
      >
        {JOB_CATEGORIES.map((e, i) => (
          <option key={i} value={e.id}>
            {e.title}
          </option>
        ))}
      </Field>
    );
  } else if (key === "city") {
    return (
      <Field
        as="select"
        className={"adsForm_input"}
        id={`${key}Id`}
        name={key}
        onChange={handleChange}
        value={values.city}
      >
        {CITIES.map((e, i) => (
          <option key={i} value={e.id}>
            {e.title}
          </option>
        ))}
      </Field>
    );
  } else if (key === "description") {
    return (
      <Field
        as="textarea"
        className={"adsForm_input"}
        id={`${key}Id`}
        name={key}
        onChange={handleChange}
        value={values[key]}
      />
    );
  } else if (key === "extra") {
    return (
      <div
        role={"group"}
        aria-labelledby="checkbox-group"
        className="adsForm__checkboxes"
      >
        {JOB_REQUIREMENTS.map((e, i) => (
          <label key={i} className={"adsForm__checkbox-label"}>
            <Field key={i} type="checkbox" name={`${key}`} value={e.id} />
            <div className="adsForm__checkboxes-custom_chbx"></div>
            <span>{e.title}</span>
          </label>
        ))}
      </div>
    );
  } else if (key === "employment") {
    return (
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name={`${key}`} value={JOB_TIME.fullTime} />
          Полный день
        </label>
        <label>
          <Field type="radio" name={`${key}`} value={JOB_TIME.partTime} />
          Частичная занятость
        </label>
      </div>
    );
  } else if (key === "plans") {
    return (
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name={`${key}`} value={"STANDART"} />
          Cтандарт
        </label>
        <label>
          <Field type="radio" name={`${key}`} value={"VIP"} />
          Вип
        </label>
        <label>
          <Field type="radio" name={`${key}`} value={"SUPERVIP"} />
          Супер вип
        </label>
      </div>
    );
  } else {
    return (
      <Field
        as="input"
        className={"adsForm_input"}
        id={`${key}Id`}
        name={key}
        onChange={handleChange}
        value={values[key]}
      />
    );
  }
};
