console.log('test')
export { getAllCards, getUserInfo, editProfile, addNewCard, deleteCardFrom, addLike, removeLike, changeAvatarImg }

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
function deleteCardFrom(card) {
  return fetch(`${config.baseUrl}/cards/${card}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(onResponse)
}

//постановка лайка
function addLike(dataId) {
  return fetch(`${config.baseUrl}/cards/likes/${dataId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(onResponse)
}

//снятие лайка
function removeLike(dataId) {
  return fetch(`${config.baseUrl}/cards/likes/${dataId}`, {
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



