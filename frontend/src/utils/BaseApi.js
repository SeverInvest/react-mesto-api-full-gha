// 'use strict';

export default class BaselApi {
  constructor(connect) {
    this._baseUrl = connect.baseUrl;
    this._headers = connect._headers;
    // this._headersWithoutToken = connect.headersWithoutToken;
    // this._headersWithToken = connect.headersWithToken;
}
  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка: ${result.status}`);
  }

  _requestWithToken(token, url, options) {
    return fetch(
      `${this._baseUrl}${url}`,
      // Object.assign(options, { headers: this._headersWithToken })
      Object.assign(options, { headers: { ...this._headers, "Authorization": `Bearer ${token}`, } })
    )
      .then(this._checkResponse)
  }

  _requestWithoutToken(url, options) {
    return fetch(
      `${this._baseUrl}${url}`,
      Object.assign(options, { headers: this._headers })
    )
      .then(this._checkResponse)
  }

  // _requestCheckToken(token, url, options) {
  //   return fetch(
  //     `${this._baseUrl}${url}`,
  //     Object.assign(options, { headers: { ...this._headers, "Authorization": `Bearer ${token}`, } })
  //   )
  //     .then(this._checkResponse)
  // }

}
