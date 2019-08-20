import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projetosonar.herokuapp.com'
});

export default api;