const getHeaders = (additionalHeaders = {}) => {
  return Object.assign({
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }, additionalHeaders)
};

let host = `${process.env.REACT_APP_API_SERVER}/mobile`;

const handleErrors = (response, cb, params) => {
  if (response.ok) return response.json();
  return response.json().then(body => {
    return Promise.reject(body)
  })
};

const api = {
  get: (url, headers) => {
    return fetch(host + url, {
      method: 'GET',
      headers: getHeaders(headers),
      mode: 'cors'
    })
      .then(response => handleErrors(response, api.get, {url}))
  },

  post: (url, payload, headers) => {

    return fetch(host + url, {
      method: 'POST',
      headers: getHeaders(headers),
      mode: 'cors',
      body: JSON.stringify(payload)
    })
      .then(response => handleErrors(response, api.post, {url, payload}))
  }
};

export default api;
