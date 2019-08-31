import React from 'react'
import Contact from './Contact'
import contactService from '../services/contacts'

const Contacts = ({contacts, filter, setContacts}) => {

    const isEmpty = (str) => str.length === 0
  
    const contactsToShow = isEmpty(filter) ? contacts : contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
    const deleteContact = (contact_id) => {
      contactService.remove(contact_id).then(returnedContact => {
        setContacts(contacts.filter(n => n.id !== contact_id))
      })
    }

    const toggleActive = (contact_id) => {
      const newContact = contacts.find(contact => contact.id === contact_id)
      const changedContact = {...newContact, active: !newContact.active}
      contactService.update(contact_id, changedContact).then(returnedContact => {
        setContacts(contacts.map(c => c.id !== contact_id ? c : returnedContact ))
      })
    }

    const contactList = () => contactsToShow.map(contact => { 
      return(<Contact toggleActive={toggleActive} handleDeleteClick={()=>deleteContact(contact.id)} key={contact.id} contact={contact} />)
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