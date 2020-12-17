import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Справи:</h1>
      <h2>{toDo} не виконано, {done} завершені</h2>
    </div>
  );
};

export default AppHeader;
