import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Your Name' />
            <br />
            <br />
            <input type="email" placeholder='Enter Your E-mail'/>
            <br />
            <br />
            <button style={{padding:"10px",borderRadius:".4rem",backgroundColor:"yellow",border:"none"}}>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm