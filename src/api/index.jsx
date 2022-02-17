// vitals
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-list-be-castromilton07.herokuapp.com',
});

export default api;
