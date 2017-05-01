import React from 'react'
import ReactDOM from 'react-dom'
// import FilmList from './FilmList.jsx'

class FilmBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [
      {
        id:1,
        title: "A Cat's Porpoise"
      },
      {
        id:2,
        title: "Sleepful"
      }]
    }
  }

  render(){
    return(
        <div className="film-box">
          <p>this is the film box</p>
        </div>
      )
  }
}

export default FilmBox