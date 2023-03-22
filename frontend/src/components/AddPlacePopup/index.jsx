import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm';
import Validation from '../Validation';
import useFormAndValidation from "../../hooks/useFormAndValidation";

function AddPlacePopup({
  isOpen,
  onClose,
  onSubmit,
  onClickPass,
  changeButtonText,
  buttonText
}) {

  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  function handleSubmit(evt) {
    changeButtonText(true);
    evt.preventDefault();
    onSubmit({
      name: values.name,
      link: values.link,
    });
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText={buttonText}
      ariaLabel="Добавление карточки"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isValid}
      onClickPass={onClickPass}
    >
      <input
        required
        minLength="2"
        maxLength="30"
        type="text"
        placeholder="Название"
        className="form__input form__input_type_place"
        name="name"
        id="place-header"
        onChange={handleChange}
        value={values.name || ""}
      />
      <Validation
        errorMessage={errors.name}
      />
      <input
        required
        type="url"
        placeholder="Ссылка на картинку"
        className="form__input form__input_type_link"
        name="link"
        id="link"
        onChange={handleChange}
        value={values.link || ""}
      />
      <Validation
        errorMessage={errors.link}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;