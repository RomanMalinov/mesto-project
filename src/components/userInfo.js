export { UserInfo }

// Создание класса UserInfo
class UserInfo {
  constructor({ selectorUserName, selectorUserAbout }) {
    this.userName = document.querySelector(selectorUserName);
    this.userAbout = document.querySelector(selectorUserAbout);
  }

  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userAbout: this.userAbout.textContent
    }
  }

  setUserInfo({ userName, userAbout }) {
    this.userName.textContent = userName,
      this.userAbout.textContent = userAbout
  }

}


