const connect = {
  "baseUrl":
    "http://api.sivnv.ru",
  "headersWithoutToken": {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  "headersWithToken": {
    "Accept": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  }
};

export default connect;
