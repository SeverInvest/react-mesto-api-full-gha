// 'use strict';
import connect from './connect.js';
import BaseApi from './BaseApi.js';

class Auth extends BaseApi{
  constructor() {
    super(connect);
  }

  register(email, password) {
    return super._request(
      '/signup',
      {
        method: 'POST',
        body: JSON.stringify({ email, password })
      }
    )
  };

  authorize(email, password) {
    return super._request(
      '/signin',
      {
        method: 'POST',
        body: JSON.stringify({ email, password })
      }
    )
  };

  checkToken() {
    return super._request('/users/me',
      {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include'
      }
    )
  };
}

const auth = new Auth(connect);

export default auth;