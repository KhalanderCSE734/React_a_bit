import React from 'react'

const CallBackComponent = ({adjective}) => {
  console.log("CallBackComponent is Rendered");
  return (
    <div>
        <h1>I'm CallBack Component {adjective}</h1>
    </div>
  )
}

export default CallBackComponent