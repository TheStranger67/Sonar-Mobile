import axios from 'axios';

const api = axios.create ({
  baseURL: 'https://api-projetosonar.herokuapp.com/'
});

export default api;
