export default class Api {
  constructor (
    address,
    id,
    pathInfo,
    pathCards,
    token
  ) {
    
    this.address = address;
    this.token = token;
    this.id = id;
    this.pathInfo = pathInfo;
    this.pathCards = pathCards;
}
  getUserInfo() {
    return fetch(`${this.address}${this.id}${this.pathInfo}`, {
      headers: {
        authorization: `${this.token}`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  getCards() {
    return fetch(`${this.address}${this.id}${this.pathCards}`, {
      headers: {
        authorization: `${this.token}`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  updateProfileInfo(name, about) {
    return fetch(`${this.address}${this.id}${this.pathInfo}`, {
      method: "PATCH",
      headers: {
        authorization: `${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }
}
