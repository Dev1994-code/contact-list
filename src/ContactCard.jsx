import React, { useState } from 'react'

export const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);
  return (
    <div className='contact-card'>
        <img src={props.img}
             alt='profile'/>
             <div className='user-details'>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() => setShowAge(!showAge)}>Show-Age</button>
                {showAge && <p>Age: {props.age}</p>}
             </div>
    </div>
  )
}
