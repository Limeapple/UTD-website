import React from 'react';
import Header from './Components/Header';
import Blog from './Components/Blog'
import Students from './Components/students/Students'
import Publications from './Components/publication/Publications'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div >
    <Header/>
    <Route exact path='/' component={Blog}/>
    <Route path='/publications' component={Publications}/>
    <Route path='/students' component={Students}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
