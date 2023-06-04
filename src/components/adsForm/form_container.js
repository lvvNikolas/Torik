import {
  jobsInitialValues,
  jobsInputsTexts,
} from "../forms/data/job-form-data";
import {
  rentInputsTexts,
  rentInitialValues,
} from "../forms/data/rent-form-data.js";
import {
  servicesInitialValues,
  servicesInputsTexts,
} from "../forms/data/services-form-data";
import {
  trucksInitialValues,
  trucksInputsTexts,
} from "../forms/data/trucks-form-data";
import Form from "../forms/user-form";

const FormContainer = ({ data }) => {
  //TODO добавить данные для остальных форм type указывать как в ценах Pricing
  const formsData = [
    {
      type: "JOB",
      inputsTexts: jobsInputsTexts,
      initialValues: jobsInitialValues,
    },
    {
      type: "RENT",
      inputsTexts: rentInputsTexts,
      initialValues: rentInitialValues,
    },
    {
      type: "SERVICES",
      inputsTexts: servicesInputsTexts,
      initialValues: servicesInitialValues,
    },
    {
      type: "TRUCKS",
      inputsTexts: trucksInputsTexts,
      initialValues: trucksInitialValues,
    },
  ];
  const idFormHandler = () => {
    return data.filter((e) => e.isActive)[0].id;
  };
  return (
    <div className="adsForm__form-container">
      <p className="adsForm__form-note">
        Отмеченные "*" пункты обязательны для заполнения
      </p>
      <Form {...formsData[idFormHandler()]} />
    </div>
  );
};

export default FormContainer;
