// 'use strict';

export default class BaselApi {
  constructor(connect) {
    this._baseUrl = connect.baseUrl;
    this._headersWithoutToken = connect.headersWithoutToken;
    this._headersWithToken = connect.headersWithToken;
}
  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка: ${result.status}`);
  }

  _requestWithToken(url, options) {
    return fetch(
      `${this._baseUrl}${url}`,
      Object.assign(options, { headers: this._headersWithToken })
    )
      .then(this._checkResponse)
  }

  _requestWithoutToken(url, options) {
    return fetch(
      `${this._baseUrl}${url}`,
      Object.assign(options, { headers: this._headersWithoutToken })
    )
      .then(this._checkResponse)
  }

  _requestCheckToken(token, url, options) {
    return fetch(
      `${this._baseUrl}${url}`,
      Object.assign(options, { headers: { ...this._headersWithoutToken, "Authorization": `Bearer ${token}`, } })
    )
      .then(this._checkResponse)
  }

}
