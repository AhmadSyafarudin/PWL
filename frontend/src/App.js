import React from 'react';
import Main from './pages/main';
import Form from './pages/form';
import Edit from './pages/edit';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<Main/>}/>
        <Route exact path ="/edit/:id" element={<Edit/>}/>
        <Route exact path ="/form" element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
