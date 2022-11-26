import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css"; 
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                             
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
