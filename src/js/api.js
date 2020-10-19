export default class Api {
  constructor (
    address,
    id,
    pathInfo,
    pathCards,
    pathAvatar,
    token
  ) {
    
    this.address = address;
    this.token = token;
    this.id = id;
    this.pathInfo = pathInfo;
    this.pathCards = pathCards;
    this.pathAvatar = pathAvatar;
}
  getUserInfo() {
    return fetch(`${this.address}${this.id}${this.pathInfo}`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => 
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(info => {
        console.log(info);
        return info;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  getCards() {
    return fetch(`${this.address}${this.id}${this.pathCards}`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => 
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(res => {
        return res.slice(0, 5);
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  updateProfileInfo(name, about) {
    return fetch(`${this.address}${this.id}${this.pathInfo}`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
      .then(res => 
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }
  
  updateAvatar(avatar) {
    return fetch(`${this.address}${this.id}${this.pathAvatar}`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: `${avatar}`
      })
    })
      .then(res => 
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  uploadFromForm(link, name) {
    return fetch(`${this.address}${this.id}${this.pathCards}`, {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    })
      .then(res => 
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(res => {
        return res;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.address}${this.id}${this.pathCards}5e556a8769fae7001f72a3c1`, {
      method: "DELETE",
      headers: {
        authorization: this.token
      }
    })
    .then( res =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
    .then(res => {
      return res;
    })
    .catch(error => {
      throw new Error(error.message);
    });
  }
}
