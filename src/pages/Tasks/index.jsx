// vitals
import React, { useState, useEffect } from 'react';

// components, mocks
import api from '../../api';
import getTasksBy from '../../services';
import validate from '../../helper';
import TaskItems from '../../components/TaskItems';
// import tasksResponse from './mock/tasksResponseMock';

// styles
import TaskStyled from './styles';

function Tasks() {
  const [tasksResponse, setTasksResponse] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskData, setTaskData] = useState({});
  const [deletedOrUpdated, setDeletedOrUpdated] = useState(false);
  const [changeOrder, setChangeOrder] = useState(false);
  const [orderPath, setOrderPath] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [status, setStatus] = useState([]);

  const resetDefault = () => {
    document.querySelector('#title').value = '';
    setTaskTitle('');
  };

  const submitTask = () => {
    setTaskData({
      title: taskTitle,
      status: 'Pendente',
    });
    resetDefault();
  };

  const postTask = async () => {
    await api.post('/tasks', { ...taskData })
      .catch((error) => {
        console.log(error.response.status);
      });
    setDeletedOrUpdated(true);
  };

  const getTasks = async () => api.get('/tasks')
    .then((response) => response.data)
    .catch((error) => console.log(error.response.status));

  const deleteTask = async ({ target }) => {
    api.delete(`/tasks/${target.value}`)
      .catch((error) => console.log(error.response.status));
    setDeletedOrUpdated(true);
  };

  const updateTask = async ({ target }, title, index) => {
    api.put(`/tasks/${target.value}`, { title, status: status[index] })
      .catch((error) => console.log(error.response.status));
    setDeletedOrUpdated(true);
  };

  const deleteAllTasks = async () => {
    api.delete('/tasks/clear')
      .catch((error) => console.log(error.response.status));
    setDeletedOrUpdated(true);
  };

  const changeOrderTask = async ({ target }) => {
    setOrderPath(target.value);
    setChangeOrder(true);
  };

  const adjustTaskData = (tasks) => {
    const adjustedTasks = [];
    tasks.forEach((task) => {
      const { _id: id } = task;
      const date = new Date(task.createdAt);
      const createdAt = date.toLocaleDateString('pt-BR');
      adjustedTasks.push({
        id,
        title: task.title,
        status: task.status,
        createdAt: `${createdAt} ${date.toLocaleTimeString('pt-BR')}`,
      });
    });
    return adjustedTasks;
  };

  useEffect(() => {
    const getTasksList = async () => {
      const getAllTasks = await getTasks();
      const adjustedTasksData = adjustTaskData(getAllTasks);
      setTasksResponse(adjustedTasksData);
      setStatus([]);
      setDeletedOrUpdated(false);
    };
    getTasksList();
  }, [deletedOrUpdated]);

  useEffect(() => {
    tasksResponse.forEach((task) => {
      setStatus((previousStatus) => [...previousStatus, task.status]);
    });
  }, [tasksResponse]);

  useEffect(() => {
    if (validate.validateTitleSubmit(taskTitle)) {
      setIsDisable(false);
    } else setIsDisable(true);
  }, [taskTitle]);

  useEffect(() => {
    if (Object.keys(taskData).length !== 0 && isDisable) {
      postTask();
    }
  }, [taskData, isDisable]);

  useEffect(() => {
    const changeTasksListOrder = async () => {
      const changeOrderTasks = await getTasksBy(orderPath);
      const adjustedTasksData = adjustTaskData(changeOrderTasks);
      setTasksResponse(adjustedTasksData);
      setStatus([]);
      setChangeOrder(false);
    };
    if (changeOrder) {
      changeTasksListOrder();
    }
  }, [changeOrder, orderPath]);

  return (
    <TaskStyled>
      <h1 className="page-title">Ebyrt ToDo List</h1>
      <section className="page-container">
        <section className="input-task-container">
          <label htmlFor="title" className="title-label">
            Title
            <input
              type="text"
              id="title"
              name="title"
              className="task-title-input"
              placeholder="Type a title for your task"
              onChange={ (e) => setTaskTitle(e.target.value) }
            />
          </label>
          <button
            type="button"
            name="submit"
            className="button-submit"
            disabled={ isDisable }
            onClick={ submitTask }
          >
            Add Task
          </button>
          <button
            type="button"
            name="clear"
            className="button-clear"
            onClick={ deleteAllTasks }
          >
            Clear List
          </button>
        </section>
        <span className="warning-message">
          * Title must have at least 6 characters
        </span>
        <TaskItems
          tasks={ tasksResponse !== null
            ? tasksResponse : [] }
          status={ status }
          setStatus={ setStatus }
          deleteTask={ deleteTask }
          updateTask={ updateTask }
          deleteAllTasks={ deleteAllTasks }
          changeOrderTask={ changeOrderTask }
        />
      </section>
    </TaskStyled>
  );
}

export default Tasks;
