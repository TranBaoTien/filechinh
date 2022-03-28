import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Menubar from './component/Menubar';
function App() {
  return (
    <div className="App">
      <div className='header'>
      <header>
      <Menubar></Menubar>
      </header>
      </div>
      <div className='footer'>
      <footer>
      <Footer></Footer>
      </footer>
      </div>
    </div>
  );
}

export default App;
