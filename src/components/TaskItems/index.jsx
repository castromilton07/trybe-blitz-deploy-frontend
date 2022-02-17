// vitals
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// styles
import TaskItemsStyled from './styles';

// constants
const tableColumns = [
  'Item',
  'Title',
  'Status',
  'Created',
  'Modify',
  'Remove',
];

const statusTypes = [
  'Pendente',
  'Em Andamento',
  'Pronto',
];

function TaskItems({
  tasks,
  status,
  setStatus,
  deleteTask,
  updateTask,
  changeOrderTask }) {
  const applyStatusColor = (statusElements) => {
    statusElements.forEach((statusElement, index) => {
      switch (statusElement.value) {
      case 'Pendente':
        document.querySelector(`.column-title-${index}`).style
          .color = 'rgb(220, 140, 40)';
        document.querySelector(`.column-title-${index}`).style
          .textDecoration = 'none';
        break;
      case 'Em Andamento':
        document.querySelector(`.column-title-${index}`).style
          .color = 'rgb(50, 50, 210)';
        document.querySelector(`.column-title-${index}`).style
          .textDecoration = 'none';
        break;
      case 'Pronto':
        document.querySelector(`.column-title-${index}`).style
          .color = 'black';
        document.querySelector(`.column-title-${index}`).style
          .textDecoration = 'line-through';
        break;
      default: break;
      }
    });
  };

  useEffect(() => {
    const statusElements = document.querySelectorAll('.status-input');
    if (statusElements !== undefined) applyStatusColor(statusElements);
  }, [status]);

  return (
    <TaskItemsStyled>
      <span className="task-items-subtitle">List of tasks:</span>
      <table className="task-items-container" cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="row-header">
            { tableColumns.map((column, index) => (
              column !== 'Item' && column !== 'Modify' && column !== 'Remove'
                ? (
                  <th
                    className="column-header"
                    key={ index }
                  >
                    {column}
                    <button
                      type="button"
                      className="material-icons button-asc"
                      name="asc"
                      value={ `${column.toLowerCase()}/asc` }
                      onClick={ (e) => changeOrderTask(e) }
                    >
                      north
                    </button>
                    <button
                      type="button"
                      className="material-icons button-desc"
                      name="desc"
                      value={ `${column.toLowerCase()}/desc` }
                      onClick={ (e) => changeOrderTask(e) }
                    >
                      south
                    </button>
                  </th>
                ) : (
                  <th
                    key={ index }
                    className="column-header"
                  >
                    {column}
                  </th>
                )
            ))}
          </tr>
        </thead>
        <tbody>
          { tasks.length
            ? (tasks.map((task, taskIndex) => (
              <tr className="row-body" key={ taskIndex }>
                <td
                  className="column-item"
                >
                  { taskIndex + 1 }
                </td>
                <td
                  className={ `column-title column-title-${taskIndex}` }
                >
                  { task.title }
                </td>
                <td
                  className="column-status"
                >
                  <select
                    name="status"
                    id="status"
                    className={ `status-input status-input${taskIndex}` }
                    value={ status[taskIndex] }
                    onChange={ (e) => setStatus((previousStatus) => [
                      ...previousStatus.slice(0, taskIndex),
                      e.target.value,
                      ...previousStatus.slice(taskIndex + 1),
                    ]) }
                  >
                    { statusTypes.map((statusType, statusIndex) => (
                      <option
                        value={ statusType }
                        key={ statusIndex }
                      >
                        {statusType}
                      </option>
                    ))}
                  </select>
                </td>
                <td
                  className="column-created"
                >
                  { task.createdAt }
                </td>
                <td className="column-modify-button">
                  <button
                    type="button"
                    className="material-icons button-modify"
                    name="modify"
                    value={ task.id }
                    onClick={ (e) => updateTask(e, task.title, taskIndex) }
                  >
                    edit
                  </button>
                </td>
                <td className="column-remove-button">
                  <button
                    type="button"
                    className="material-icons button-remove"
                    name="remove"
                    value={ task.id }
                    onClick={ (e) => deleteTask(e) }
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))) : <> </> }
        </tbody>
      </table>
    </TaskItemsStyled>
  );
}

TaskItems.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  status: PropTypes.arrayOf(PropTypes.string).isRequired,
  setStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  changeOrderTask: PropTypes.func.isRequired,
};

export default TaskItems;
