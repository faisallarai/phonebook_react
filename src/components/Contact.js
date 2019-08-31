import React from 'react';
import Button from './Button'

const Contact = ({contact, handleDeleteClick, toggleActive}) => {

    return(
      <tr>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td><Button text={'X'} handleClick={() => handleDeleteClick(contact.id)} /></td>
        <td><Button text={contact.active ? 'deactivate' : 'activate'} handleClick={() => toggleActive(contact.id)} /></td>
      </tr>
    )
  }

export default Contact