import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import Application from './components/Application';

createRoot(document.querySelector('.root')).render(<Application></Application>);
