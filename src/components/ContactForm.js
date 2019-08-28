import React from 'react'
import Button from './Button'
import Label from './Label'
import Input from './Input'

const ContactForm = (props) => {
    const {
      addNew,
      handleNameChange,
      handlePhoneNumberChange,
      name,
      number
    } = props
  
    return(
      <form onSubmit={addNew}>
        <Label text={'Name:'} />
        <Input handleChange={handleNameChange} value={name} />
        <br />
        <Label text={'Number:'} />
        <Input handleChange={handlePhoneNumberChange} value={number} />
        <br />
        <Button type={'submit'} text={'Add'} />
      </form>
    )
  }

  export default ContactForm