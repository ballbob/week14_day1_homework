import React from 'react'
import Film from './Film.jsx'

class FilmList extends React.Component{
  constructor(props){
    super(props)
    this.state = {data: []}
  }

  render(){
    const filmNodes = this.props.data.map( (film) => {
      return(
        <Film title = {film.title} key = {film.id}>
          {film.title}
        </Film>)
    })

    return(
      <div className="film-list">
      <p>this is the film list</p>
      </div>)
  }
}

export default FilmList