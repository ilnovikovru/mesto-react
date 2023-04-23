class Api {
  constructor(config) { // задаем урл для адреса сервера и хедерс - для данные (все придет из индекса)
    this._url = config.url;
    this._headers = config.headers;
  }

  _response = (res) => { // пишем типичную обработку ответа от сервера
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() { // запрашиваем с сервера данные пользователя (Кусто) и обрабатываем ответ
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._response);
  }

  getInitialCards() { // запрашиваем с сервера карточки и обрабатываем ответ
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._response);
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._response);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._response);
  }

  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._response);
  }

  likeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._response);
  }

  dislikeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._response);
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
      .then(this._response)
      .then(console.log())
  }

}

const apiConfig = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    'content-type': 'application/json',
    authorization: 'e70c5caa-7ab0-4df0-ba41-176f0bfef9df'
  }
});

export default apiConfig;