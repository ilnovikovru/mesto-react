function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="elements__list-item">
      <article className="element">
        <button type="button" value="Удалить" className="element__delete" aria-label="Удалить"></button>
        <img src={card.link} alt={card.name} className="element__image" onClick={handleClick} />
        <div className="element__name">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button type="button" value="Нравится" className="element__like" aria-label="Нравится"></button>
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
