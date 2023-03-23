// 'use strict';
import connect from './connect.js';
import BaseApi from './BaseApi.js';

class Api extends BaseApi {
  constructor() {
    super(connect);
  }

  getInitialCards() {
    return this._requestWithToken(
      '/cards',
      {
        method: "GET"
      }
    )
  }

  getUser() {
    return this._requestWithToken(
      '/users/me',
      {
        method: "GET"
      }
    )
  }

  getInitialData() {
    return Promise.all([this.getUser(), this.getInitialCards()])
  }

  setUserInfo(info) {
    return this._requestWithToken(
      '/users/me',
      {
        method: 'PATCH',
        body: JSON.stringify(info)
      }
    )
  }

  setCard(info) {
    return this._requestWithToken(
      '/cards',
      {
        method: "POST",
        body: JSON.stringify(info)
      }
    )
  }

  toggleLikeCard({ idCard, methodCardLike }) {

    return this._requestWithToken(
      `/cards/${idCard}/likes`,
      {
        method: methodCardLike
      }
    )
  }

  deleteCard(idCard) {
    return this._requestWithToken(
      `/cards/${idCard}`,
      {
        method: "DELETE"
      }
    )
  }

  setAvatar(info) {
    return this._requestWithToken(
      '/users/me/avatar',
      {
        method: "PATCH",
        body: JSON.stringify(info)
      }
    )
  }
}

const api = new Api(connect);

export default api;