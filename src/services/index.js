import api from '../api';

const getTasksBy = async (path) => api.get(`/tasks/${path}`)
  .then((response) => response.data)
  .catch((error) => console.log(error.response.status));

export default getTasksBy;
