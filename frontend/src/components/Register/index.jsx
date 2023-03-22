import FormRegister from "../FormRegister";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Register ({ handleRegister }) {

const {values, handleChange, errors, isValid} = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isValid) {
      return;
    };
    handleRegister(values);
  }

  return (
    <FormRegister
      theme="dark"
      textHeader="Регистрация"
      textButton="Зарегистрироваться"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      additionally={true}
      errors={errors}
      isValid={isValid}
    />
  );
}

export default Register;