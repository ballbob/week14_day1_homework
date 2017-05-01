import React from 'react';
import ReactDOM from 'react-dom';
import FilmBox from './components/FilmBox.jsx'

window.onload = function(){
  ReactDOM.render(
   <div>
    <h3>Upcoming releases</h3>
    <FilmBox />
  </div>,
    document.getElementById('upcoming-films')
  )
}
