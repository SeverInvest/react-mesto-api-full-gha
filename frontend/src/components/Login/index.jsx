import FormRegister from "../FormRegister";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid} = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isValid) {
      return;
    };
    handleLogin(values);
  }

  return (
    <FormRegister
      theme="dark"
      textHeader="Вход"
      textButton="Войти"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      additionally={false}
      errors={errors}
      isValid={isValid}
    />
  );
}

export default Login;