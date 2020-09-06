import React from 'react';
import { Navbar } from 'react-bootstrap';
import { logo } from './images';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" class="app-logo" /> HomeVision
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
