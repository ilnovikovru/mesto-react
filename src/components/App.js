import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="edit" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="input-name" defaultValue="Имя" className="popup__input-text popup__input-text_type_name" name="name" type="text"
          minLength="2" maxLength="40" required />
        <span id="input-name-error" className="popup__input-error"></span>
        <input id="input-caption" defaultValue="О себе" className="popup__input-text popup__input-text_type_caption" name="about"
          type="text" minLength="2" maxLength="200" required />
        <span id="input-caption-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="add" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input placeholder="Название" id="input-title" className="popup__input-text popup__input-text_type_title"
          name="name" type="text" minLength="2" maxLength="30" required />
        <span id="input-title-error" className="popup__input-error"></span>
        <input placeholder="Ссылка на картинку" id="input-link" className="popup__input-text popup__input-text_type_link"
          name="link" type="url" required />
        <span id="input-link-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm title='Вы уверены?' name='delete' buttonText="Да">
        // тут надо доделать
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" name="edit-avatar" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input placeholder="Ссылка на картинку" id="input-avatar-link" className="popup__input-text popup__input-text_type_link"
          name="link" type="url" required />
        <span id="input-avatar-link-error" className="popup__input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
