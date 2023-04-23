function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}${props.isOpen ? " popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form id={props.name} className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
          {props.children}
          <button type="submit" form={props.name} className={`popup__submit-button popup__submit-button_${props.name}`}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;