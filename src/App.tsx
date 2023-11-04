import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import AppHeader from './AppHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/exercise-app">
    <Routes>
      <Route element={<AppHeader />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
