import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import { EventsPage } from './components/EventsPage';
import { LoadFirebase } from './components/LoadFirebase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <LoadFirebase>
            <Routes>
                <Route path='/' element={<EventsPage />} />
            </Routes>
        </LoadFirebase>
    </BrowserRouter>
  </React.StrictMode>
);