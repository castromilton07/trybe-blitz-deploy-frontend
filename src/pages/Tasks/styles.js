// vitals
import styled from 'styled-components';

const TaskStyled = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Noto Sans, sans-serif;
  height: 100%;
  margin: auto;
  width: 100%;

  .page-title {
    align-items: center;
    background-color: rgb(40, 190, 140);
    color: white;
    display: flex;
    font-size: 2.2em;
    height: 2em;
    justify-content: center;
    margin-bottom: 0.5em;
    text-align: center;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;

    .input-task-container {
      display: flex;
      flex-direction: row;
      height: 6em;
      justify-content: space-evenly;
      width: 100%;

      label {
        display: flex;
        flex-direction: column;
      }

      .title-label {
        height: 90%;
        font-size: 1.4em;
        font-weight: 600;
        margin: auto;
        width: 50%;

        .task-title-input{
          border: 1px solid black;
          border-radius: 4px;
          font-size: 0.8em;
          height: 45%;
          margin: auto 0;
          padding-left: 1em;
        }
      }

      .button-submit {
        background-color: rgb(0, 110, 80);
        border: transparent;
        border-radius: 10px;
        color: white;
        font-size: 1.3em;
        height: 45%;
        margin: auto;
        width: 15%;
      }

      .button-submit:disabled {
        background-color: rgba(0, 110, 80, 0.7);
        color: rgba(rgb(210, 210, 210), 0.8);
      }

      .button-clear {
        background-color: rgb(215, 65, 65);
        border: transparent;
        border-radius: 10px;
        color: white;
        font-size: 1.3em;
        margin: auto;
        height: 45%;
        width: 15%;
      }
    }

    .warning-message {
      font-size: 0.8em;
      margin-bottom: 0.5em;
      padding-left: 3.5em;
    }
  }
`;

export default TaskStyled;
