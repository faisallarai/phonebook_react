import React, {useState} from 'react';
import Button from './Button'

const Contact = ({contact, handleDeleteClick}) => {

    return(
      <tr>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td><Button text={'X'} handleClick={() => handleDeleteClick(contact.id)} /></td>
      </tr>
    )
  }

export default Contact