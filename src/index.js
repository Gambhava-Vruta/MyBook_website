import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './com/Home.js'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Getall from './com/Getall.js';
import Getone from './com/Getone.js';
import Insert from './com/Insert.js';
import Update from './com/update.js';
import Buy from './com/Buy.js';
import About from './com/About.js';
import Photo from './com/Photo.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}> 
<Route path='/' element={<Photo/>}/> 


 <Route path='/Book/:id' element={<Getone/>}/>
 <Route path='/Book/add' element={<Insert/>}/>
 <Route path='/Book/edit/:id' element={<Update/>}/>
 <Route path='/Book/buy/:id' element={<Buy/>}/>

 <Route path='/about' element={<About/>}/>

 </Route>


 <Route path='/Book' element={<Getall/>}/> 




</Routes>
</BrowserRouter>   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
