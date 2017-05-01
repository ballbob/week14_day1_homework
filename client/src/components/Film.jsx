import React from 'react'

const Film = (props) => {
  return(
    <div className="film">

      <p className="filmTitle">
        {props.title}
      </p>

    </div>)
}


export default Film