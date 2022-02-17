// vitals
import styled from 'styled-components';

const TaskItemsStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;

  .task-items-subtitle {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    text-align: center;
  }

  .task-items-container {
    border-spacing: 0 0.6em;
    width: 100%;

    .row-header {

      .column-header {
        font-size: 1.2em;
        font-weight: 400;

        .button-asc {
          background-color: rgb(220, 220, 220);
          border-radius: 5px;
          font-size: 1em;
          margin: auto 0.5em;
        }
        .button-desc {
          background-color: rgb(220, 220, 220);
          border-radius: 5px;
          font-size: 1em;
        }
      }
    }

    .row-body {
      padding-bottom: 0.2em;

      .column-item {
        background-color: rgb(40, 190, 140);
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        font-size: 1.1em;
        font-weight: 700;
        height: 1.5em;
        text-align: center;
        width: 5%;
      }

      .column-title {
        background-color: rgba(40,190,140, 0.6);
        font-size: 1.1em;
        height: 1.5em;
        padding-left: 1em;
        width: 40%;
      }

      .column-status {
        background-color: rgba(40,190,140, 0.6);
        height: 1.5em;
        width: 15%;

        .status-input {
          background-color: transparent;
          font-size: 1.1em;
          width: 100%
        }
      }

      .column-created {
        background-color: rgba(40,190,140, 0.6);
        font-size: 1.1em;
        height: 1.5em;
        text-align: center;
        width: 25%
      }

      .column-modify-button {
        background-color: rgb(40, 190, 140);
        height: 1.5em;
        width: 7%;

        .button-modify {
          background-color: rgb(235, 235, 130);
          border: transparent;
          border-radius: 15%;
          display: flex;
          color: black;
          margin: auto;
        }
      }

      .column-remove-button {
        background-color: rgb(40, 190, 140);
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        height: 1.5em;
        width: 7%;

        .button-remove {
          background-color: rgb(215, 65, 65);
          border: transparent;
          border-radius: 15%;
          display: flex;
          color: white;
          margin: auto;
        }
      }
    }
  }
`;

export default TaskItemsStyled;
