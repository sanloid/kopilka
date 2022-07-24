import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import About from './components/About';
import CreatePlan from './components/CreatePlan';
import TstSheet from './components/TstSheet';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path='calendar' element={<Calendar />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='plansnew' element={<CreatePlan />}></Route>
        <Route path='test' element={<TstSheet />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

