import { useRef, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm';
import Validation from '../Validation';
import useFormAndValidation from "../../hooks/useFormAndValidation";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onClickPass,
  changeButtonText,
  buttonText
}) {

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const avatarRef = useRef();

  function handleSubmit(evt) {
    changeButtonText(true);
    evt.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  useEffect(() => {
    resetForm();
    avatarRef.current.value = '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <PopupWithForm
      name="upd-avatar"
      title="Обновить аватар"
      buttonText={buttonText}
      ariaLabel="Сохранение данных формы"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={isValid}
      onclickPass={onClickPass}
    >
      <input
        required
        type="url"
        placeholder="Ссылка на аватар"
        className="form__input form__input_type_link"
        name="avatar"
        id="link-avatar"
        ref={avatarRef}
        value={values.avatar || ""}
        onChange={handleChange}
      />
      <Validation
        errorMessage={errors.avatar}
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;