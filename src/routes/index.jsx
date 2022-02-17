// vitals
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Tasks from '../pages/Tasks';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/tasks" /> } />
        <Route exact path="/tasks" element={ <Tasks /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
