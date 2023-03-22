import "./style.scss"
import Validation from "../Validation";
import { Link } from "react-router-dom";

function FormRegister({
  theme,
  textHeader,
  textButton,
  handleSubmit,
  handleChange,
  values,
  additionally = false,
  errors,
  isValid
}) {

  return (
    <div className={`form-register ${theme === "dark" && "theme__dark"}`}>
      <div className="form-register__header">
        <h1 className="form-register__header__text">
          {textHeader}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="form-register__form" method="post">

        <div>
          <div className="form-register__input">
            <input
              required
              className={`form-register__input__content ${theme === "dark" && "theme__dark"}`}
              id="email"
              name="email"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-register__validation">
            {(!isValid && <Validation errorMessage={errors.email} />)}
          </div>
          <div className="form-register__input">
            <input
              required
              className={`form-register__input__content ${theme === "dark" && "theme__dark"}`}
              id="password"
              name="password"
              type="password"
              value={values.password || ""}
              onChange={handleChange}
              placeholder="Пароль"
            />
          </div>
          <div className="form-register__validation">
            {(!isValid && <Validation errorMessage={errors.password} />)}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className={`form-register__submit ${theme === "dark" && "theme__dark__button"}`}
          >
            {textButton}
          </button>

          <div className="form-register__additionally">
            {additionally &&
              <p>
                Уже зарегистрированы?
                <Link
                  to="/sign-in"
                  className="form-register__additionally__link"
                >
                  Войти
                </Link>
              </p>
            }
          </div>

        </div>

      </form>

    </div >
  )
}

export default FormRegister;