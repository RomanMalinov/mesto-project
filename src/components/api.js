console.log('test')
export { getAllCards,  getUserInfo, editProfile, addNewCard, deleteCard, likesCards, deleteLikesCards, changeAvatarImg }

// Объект конфигурации
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
  headers: {
    'content-type': 'application/json',
    authorization: '4795c652-4f69-4cb4-b309-abc01e676f2c',
  }
}

function onResponse(res) {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data))
}

//_____________________________________________________________________


//загрузка карточек с сервера
function getAllCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
    .then(onResponse)
}

//получение информации пользователя
function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then(onResponse)
}

//редактирование профиля пользователя
function editProfile(dataProfile) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(dataProfile)
  })
    .then(onResponse)
}

//получение новой карточки
function addNewCard(dataCard) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(dataCard)
  })
    .then(onResponse)
}

//удаление карточки
function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(onResponse)
}

//постановка лайка
function likesCards(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(onResponse)
}

//снятие лайка
function deleteLikesCards(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(onResponse)
}

//обновление аватара пользователя
function changeAvatarImg(avatarData) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(avatarData)
  })
    .then(onResponse)
}



