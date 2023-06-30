export { UserInfo }

// Создание класса UserInfo
class UserInfo {
  constructor( {selectorUserName, selectorUserAbout, selectorUserAvatar }) {
    this._selectorUserName = selectorUserName;
    this._selectorUserAbout = selectorUserAbout;
    this._selectorUserAvatar = selectorUserAvatar;
    this._userName = document.querySelector(selectorUserName);
    this._userAbout = document.querySelector(selectorUserAbout);
    this._userAvatar = document.querySelector(selectorUserAvatar);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }

}


