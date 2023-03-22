import React, { useContext } from 'react';
import Card from '../Card';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./style.scss"

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDeleteConfirm,
  cards
}) 
{
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="traveler">
        <div className="traveler__left">
          <img src={currentUser.avatar} alt="аватар пользователя" className="traveler__avatar" />
          <button onClick={onEditAvatar} className="traveler__change-avatar" type="button" aria-label="Редактирование аватара" />
          <div className="traveler__middle">
            <div className="traveler__name-and-button">
              <h1 className="traveler__name">{currentUser.name}</h1>
              <button onClick={onEditProfile} className="traveler__button-correct" type="button" aria-label="Редактирование профиля" />
            </div>
            <p className="traveler__about">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="traveler__button-add" type="button" aria-label="Добавление карточки" />
      </section>

      <section aria-label="Раздел с картинками" className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDeleteConfirm={onCardDeleteConfirm}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;