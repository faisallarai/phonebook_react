import React from 'react'
import Contact from './Contact'

const Contacts = ({contacts, filter, setContacts}) => {

    const isEmpty = (str) => str.length === 0
  
    const contactsToShow = isEmpty(filter) ? contacts : contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
    const contactList = () => contactsToShow.map(contact => { 
      const handleDeleteClick = (contact_id) => {
        const newContacts = contacts.filter(contact => contact.id !== contact_id)
        setContacts(newContacts)
      }
      return(<Contact handleDeleteClick={()=>handleDeleteClick(contact.id)} key={contact.id} contact={contact} />)
    })
  
    return(
      <table>
        <tbody>
          {contactList()}
        </tbody>
      </table>
    )
  }

  export default Contacts