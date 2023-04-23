import React from 'react';
import apiConfig from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    apiConfig.getUserInfo().then((userInfo) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
    });
    apiConfig.getInitialCards().then((initialCards) => {
      setCards(initialCards);
    });
  }, []);

  const handleEditAvatarClick = () => {
    const avatarPopup = document.querySelector('.popup_edit-avatar');
    avatarPopup.classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    const profilePopup = document.querySelector('.popup_edit');
    profilePopup.classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    const addPlacePopup = document.querySelector('.popup_add');
    addPlacePopup.classList.add('popup_opened');
  };

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
          </div>
          <div className="profile__info">
            <div className="profile__info-title-container">
              <h1 className="profile__info-title">{userName}</h1>
              <button type="button" className="profile__info-edit-button" aria-label="Редактировать" onClick={onEditProfile}>
              </button>
            </div>
            <p className="profile__info-subtitle">{userDescription}</p>
          </div>
          <button type="button" value="Добавить" className="profile__info-add-button" aria-label="Добавить" onClick={onAddPlace}>
          </button>
        </section>
        <section className="elements">
          <ul className="elements__list">
            {cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
