export { UserInfo }

// Создание класса UserInfo
class UserInfo {
  constructor( {selectorUserName, selectorUserAbout, selectorUserAvatar }) {
    this.userName = document.querySelector(selectorUserName);
    this.userAbout = document.querySelector(selectorUserAbout);
    this.userAvatar = document.querySelector(selectorUserAvatar);
  }

  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userAbout: this.userAbout.textContent,
      userAvatar: this.userAvatar.src
    }
  }

  setUserInfo({ userName, userAbout, userAvatar }) {
    this.userName.textContent = userName,
      this.userAbout.textContent = userAbout,
      this.userAvatar.src = userAvatar

  }

}


