import React from "react";
import PopupWithForm from "../PopupWithForm";

function InfoTooltip({ isOpen, onClose, isSuccessful, onClickPass }) {

  const title = isSuccessful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз.";
  const clsIconAlarm = isSuccessful ? "popup__icon_successfull" : "popup__icon_unsuccessfull";

  return (
    <PopupWithForm
      name="tooltip"
      title={title}
      isBtnSubmit={false}
      buttonText=""
      ariaLabel=""
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={null}
      isEnabled={true}
      clsIconAlarm={clsIconAlarm}
      onClickPass={onClickPass}
    />
  );
};

export default InfoTooltip;