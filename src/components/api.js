console.log('test')
export { Api }


// Объект конфигурации перенесен в секцию  card.js
//  const config = {
//    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
//    headers: {
//      'content-type': 'application/json',
//      authorization: '4795c652-4f69-4cb4-b309-abc01e676f2c',
//    }
//  }


// класс Api рефакторинг ООП
class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  onResponse(res) {
    return res.ok ? res.json() : res.json().then((data) => Promise.reject(data))
  }
  //загрузка карточек с сервера
  getAllCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this.onResponse)
  }

  //получение информации пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this.onResponse)
  }

  //редактирование профиля пользователя
  editProfile(dataProfile) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(dataProfile)
    })
      .then(this.onResponse)
  }

  //получение новой карточки
  addNewCard(dataCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(dataCard)
    })
      .then(this.onResponse)
  }

  //удаление карточки
  deleteCardFrom(card) {
    return fetch(`${this._baseUrl}/cards/${card}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this.onResponse)
  }

  //постановка лайка
  addLike(dataId) {
    return fetch(`${this._baseUrl}/cards/likes/${dataId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this.onResponse)
  }

  //снятие лайка
  removeLike(dataId) {
    return fetch(`${this._baseUrl}/cards/likes/${dataId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this.onResponse)
  }

  //обновление аватара пользователя
  changeAvatarImg(avatarData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatarData)
    })
      .then(this.onResponse)
  }
}



// Старый код до рефакторинга на ОПП
// // Объект конфигурации
// const config = {
//   baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
//   headers: {
//     'content-type': 'application/json',
//     authorization: '4795c652-4f69-4cb4-b309-abc01e676f2c',
//   }
// }

// function onResponse(res) {
//   return res.ok ? res.json() : res.json().then((data) => Promise.reject(data))
// }

// //_____________________________________________________________________

// //загрузка карточек с сервера
// function getAllCards() {
//   return fetch(`${config.baseUrl}/cards`, {
//     method: 'GET',
//     headers: config.headers
//   })
//     .then(onResponse)
// }

// //получение информации пользователя
// function getUserInfo() {
//   return fetch(`${config.baseUrl}/users/me`, {
//     method: 'GET',
//     headers: config.headers
//   })
//     .then(onResponse)
// }

// //редактирование профиля пользователя
// function editProfile(dataProfile) {
//   return fetch(`${config.baseUrl}/users/me`, {
//     method: 'PATCH',
//     headers: config.headers,
//     body: JSON.stringify(dataProfile)
//   })
//     .then(onResponse)
// }

// //получение новой карточки
// function addNewCard(dataCard) {
//   return fetch(`${config.baseUrl}/cards`, {
//     method: 'POST',
//     headers: config.headers,
//     body: JSON.stringify(dataCard)
//   })
//     .then(onResponse)
// }

// //удаление карточки
// function deleteCardFrom(card) {
//   return fetch(`${config.baseUrl}/cards/${card}`, {
//     method: 'DELETE',
//     headers: config.headers
//   })
//     .then(onResponse)
// }

// //постановка лайка
// function addLike(dataId) {
//   return fetch(`${config.baseUrl}/cards/likes/${dataId}`, {
//     method: 'PUT',
//     headers: config.headers
//   })
//     .then(onResponse)
// }

// //снятие лайка
// function removeLike(dataId) {
//   return fetch(`${config.baseUrl}/cards/likes/${dataId}`, {
//     method: 'DELETE',
//     headers: config.headers,
//   })
//     .then(onResponse)
// }

// //обновление аватара пользователя
// function changeAvatarImg(avatarData) {
//   return fetch(`${config.baseUrl}/users/me/avatar`, {
//     method: 'PATCH',
//     headers: config.headers,
//     body: JSON.stringify(avatarData)
//   })
//     .then(onResponse)
// }



