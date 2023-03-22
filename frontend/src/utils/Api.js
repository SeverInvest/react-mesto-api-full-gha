// 'use strict';
import connect from './connect.js';
import BaseApi from './BaseApi.js';

class Api extends BaseApi {
  constructor() {
    super(connect);
  }

  getInitialCards() {
    return super._request(
      '/cards',
      {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include'
      }
    )
  }

  getUser() {
    return super._request(
      '/users/me',
      {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include'
      }
    )
  }

  getInitialData() {
    return Promise.all([this.getUser(), this.getInitialCards()])
  }

  setUserInfo(info) {
    return super._request(
      '/users/me',
      {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        body: JSON.stringify(info)
      }
    )
  }

  setCard(info) {
    return super._request(
      '/cards',
      {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        body: JSON.stringify(info)
      }
    )
  }

  toggleLikeCard({ idCard, methodCardLike }) {

    return super._request(
      `/cards/${idCard}/likes`,
      {
        method: methodCardLike,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include'
      }
    )
  }

  deleteCard(idCard) {
    return super._request(
      `/cards/${idCard}`,
      {
        method: "DELETE",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include'
      }
    )
  }

  setAvatar(info) {
    return super._request(
      '/users/me/avatar',
      {
        method: "PATCH",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        body: JSON.stringify(info)
      }
    )
  }
}

const api = new Api(connect);

export default api;