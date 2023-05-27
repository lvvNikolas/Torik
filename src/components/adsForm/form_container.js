import {
  jobsInitialValues,
  jobsInputsTexts,
} from "../forms/data/job-form-data";
import Form from "../forms/user-form";

const FormContainer = ({ data }) => {
  const formsData = [
    {
      type: "JOB",
      inputsTexts: jobsInputsTexts,
      initialValues: jobsInitialValues,
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
