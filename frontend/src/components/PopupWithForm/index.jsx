import "./style.scss";

function PopupWithForm({
  name = "",
  isOpen = true,
  title = "",
  ariaLabel = "",
  buttonText = "",
  onClose = null,
  onSubmit = null,
  isEnabled = true,
  children,
  isBtnSubmit = true,
  clsIconAlarm = "",
  onClickPass = null
  
}) {

  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_visible' : ''}`} onClick={onClickPass}>
      <div className={`popup__container ${!isBtnSubmit && "popup__container_center"}`} >
        {clsIconAlarm &&
          <div className={`popup__icon ${clsIconAlarm}`} />
        }
        <h2 className={`popup__header ${!isBtnSubmit && "popup__header_center"}`}>{title}</h2>
        {isBtnSubmit &&
          <form method="post" className="form" name={name} id={name} onSubmit={onSubmit}>
            {children}
            <button className={`form__submit ${isEnabled ? "" : "form__submit_disabled"}`} type="submit" aria-label={ariaLabel} name={`popup-form-submit_${name}`}>{buttonText}</button>
          </form>
        }
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрытие попапа"></button>
      </div>
    </section>
  );

}
export default PopupWithForm;
