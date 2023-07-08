

// рефакторинг ООП
export default  class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _onResponse(res) {
    return res.ok ? res.json() : res.json().then((data) => Promise.reject(data))
  }
  //загрузка карточек с сервера
  getAllCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._onResponse)
  }

  //получение информации пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._onResponse)
  }

  //редактирование профиля пользователя
  editProfile(dataProfile) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: dataProfile.name,
        about: dataProfile.about
      })
    })
      .then(this._onResponse)
  }

  //получение новой карточки
  addNewCard(dataCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataCard.addNewCardName,
        link: dataCard.addNewCardLink,
      })
    })
      .then(this._onResponse)
  }

  //удаление карточки
  deleteCardFrom(card) {
    return fetch(`${this._baseUrl}/cards/${card}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._onResponse)
  }

  //постановка лайка
  addLike(dataId) {
    return fetch(`${this._baseUrl}/cards/likes/${dataId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._onResponse)
  }

  //снятие лайка
  removeLike(dataId) {
    return fetch(`${this._baseUrl}/cards/likes/${dataId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._onResponse)
  }

  //обновление аватара пользователя
  changeAvatarImg(avatarData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarData.newAvatarLink
      })
    })
      .then(this._onResponse)
  }

  // добавил новый метод

  initializeData(){
    return Promise.all([this.getUserInfo(), this.getAllCards()]);
  }
}
