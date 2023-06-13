console.log('test')
export { onResponse, getAllTasks, addTask, additTasks, deleteTask, likesCards, getAllInfo, getUserInfo }
// Набор функция для использования API
// Объект конфигурации
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
  headers: {
    'Content-Type': 'application/json',
    authorization: '4795c652-4f69-4cb4-b309-abc01e676f2c',
  }
}

function onResponse(res) {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data))
}

//загрузка карточек с сервера
function getAllTasks(body) {
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

function getAllInfo() {
  return Promise.all([getAllTasks(), getUserInfo()])
}

//добавление карточки
function addTask(body) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(body)
  })
    .then(onResponse)
}

//удаление карточки
function deleteTask(_id) {
  return fetch(`${config.baseUrl}/cards/${_id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(onResponse)
}

//редактирование профиля пользователя
//постановка и снятие лайка
//обновление аватара пользователя

// ЗАпрос к серверу
//предоставление информации о пользователе



function additTasks(body, _id) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(body)
  })
    .then(onResponse)
}



function likesCards(_id) {
  return fetch(`${config.baseUrl}/cards/likes/${_id}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(onResponse)
}


function deleteLikesCards(_id) {
  return fetch(`${config.baseUrl}/cards/likes/${_id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(onResponse)
}

