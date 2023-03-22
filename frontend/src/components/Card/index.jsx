import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import "./style.scss";

function Card({ onCardClick, onCardLike, onCardDeleteConfirm, card }) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardRemoveClassName = `card__remove-button ${isOwn ? "card__remove-button_visible" : ""}`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeClassName = `card__heart ${isLiked ? "card__heart_active" : ""}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDeleteConfirm(card);
  }

  return (
    <li className="card">
      <button
        className={cardRemoveClassName}
        onClick={handleDeleteClick}
        type="button"
        aria-label="Удаление карточки">

      </button>
      <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__footer">
        <p className="card__description">{card.name}</p>
        <div className="card__heart-and-count-likes">
          <button className={cardLikeClassName} type="button" aria-label="Лайк" onClick={handleLikeClick} />
          <span className="card__count-likes">{Object.keys(card.likes).length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
