// == Import npm
import React from "react";

// == Import
import {Header} from "./Header";
import Main from './Main/Main';
import './styles.css';

// == Composant
const App = () => (
  <div id="app">
    <Header/>    
    <Main/>
  </div>
);

// == Export
export default App;
