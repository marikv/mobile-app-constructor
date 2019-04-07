import axios from 'axios';

function setAxiosHeaders(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function register({ commit }, form) {
  return axios.post('api/auth/register', form)
    .then((response) => {
      commit('login', { token: response.data.token, user: response.data.user });
      setAxiosHeaders(response.data.token);
    });
}


export function login({ commit }, form) {
  return axios.post('api/auth/login', form)
    .then((response) => {
      commit('login', { token: response.data.token, user: response.data.user });
      setAxiosHeaders(response.data.token);
    });
}
