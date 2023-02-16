

import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>

   
       <BrowserRouter>
       <Navbar/>
      <Routes>
         
            {/* <Route exact path="/business" element={<News key="business" pagesize={8} country="in" category="business"/>} ></Route> */}
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={8} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News key="general" pagesize={8} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<News key="health" pagesize={8} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science" pagesize={8} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" pagesize={8} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" pagesize={8} country="in" category="technology"/>}></Route>
            </Routes>
    </BrowserRouter>
      </div>
    )
  }
}

