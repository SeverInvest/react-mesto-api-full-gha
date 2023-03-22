import { useEffect, useContext } from 'react';
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import PopupWithForm from '../PopupWithForm';
import Validation from '../Validation';
import useFormAndValidation from "../../hooks/useFormAndValidation";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  onClickPass,
  changeButtonText,
  buttonText
}) {

  const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } = useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(evt) {
    changeButtonText(true);
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.description,
    });
  }

  useEffect(() => {
    resetForm();
    setValues({ "name": currentUser.name, "description": currentUser.about });
    setIsValid(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText={buttonText}
      ariaLabel="Сохранить изменения"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isValid}
      onClickPass={onClickPass}
    >
      <input
        required
        minLength="2"
        maxLength="40"
        type="text"
        placeholder="Введите свое имя"
        className="form__input form__input_type_name"
        name="name"
        id="input-name"
        value={values.name || ""}
        onChange={handleChange}
      />
      <Validation
        errorMessage={errors.name}
      />
      <input
        required
        minLength="2"
        maxLength="200"
        type="text"
        placeholder="Напишите немного о себе"
        className="form__input form__input_type_about"
        name="description"
        id="input-about"
        value={values.description || ""}
        onChange={handleChange}
      />
      <Validation
        errorMessage={errors.description}
      />
    </PopupWithForm>
  );

}
export default EditProfilePopup;
