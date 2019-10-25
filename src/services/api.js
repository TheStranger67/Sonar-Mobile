import axios from 'axios';

const api = axios.create ({
  baseURL: 'https://api-projetosonar.herokuapp.com/'
  // baseURL: 'http://10.0.3.2:3333/'
});

export default api;
