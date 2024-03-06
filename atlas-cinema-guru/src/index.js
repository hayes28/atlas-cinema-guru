import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import Header from './routes/navigation/Header';
import Authentication from './routes/auth/Authentication';
import Login from './routes/auth/Login';
import Dashboard from './routes/dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SearchBar />
    <Button />
    <SelectInput />
    <Input />
    <Authentication />
    <Header />
    <Login />
    <Dashboard />
  </React.StrictMode>
);
