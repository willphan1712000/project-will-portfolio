import React from 'react'

interface Props {
  content: {
    up: string,
    down: string
  }
}

const SecondTitle = ({content}: Props) => {
  return (
    <div className="title__second">
        <div className="up">{content.up}</div>
        <div className="down">{content.down}</div>
    </div>
  )
}

export default SecondTitle
