import React from 'react';
import './styles/index.scss'
import {Route, Routes } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './pages/Home/components/Home';
import Popup from "./shared/Popup/Popup";

function App() {
  return (
      <div>
          {/*<Popup/>*/}
          <div className={"container"}>
              <Header/>
              <Routes>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/month-statistics" element={<Home/>}/>
              </Routes>
          </div>
      </div>

  );
}
export default App;
