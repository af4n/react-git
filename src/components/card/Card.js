import React from 'react'

const Card = (props) => {
  return (
    <div>
      <button onClick={() => props.history.goBack()} class="back-btn">
        BACK
      </button>
      card repo
    </div>
  )
}

export default Card
