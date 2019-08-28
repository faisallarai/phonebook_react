import React,{useState} from 'react';

const Header = ({title}) => <h2>{title}</h2>
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

const Button = ({text, type, handleClick, id}) => <button id={id} onClick={handleClick} type={type}>{text}</button>
 
const Input = ({handleChange, value}) => <input onChange={handleChange} value={value} />

const Label = ({text}) => <label>{text}</label>

const Contact = ({contact, handleDeleteClick}) => {

  return(
    <tr>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td><Button text={'X'} handleClick={() => handleDeleteClick(contact.id)} /></td>
    </tr>
  )
}

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

const SearchForm = ({handleFilterChange, filter}) => {
  return(
    <form>
      <Label text={'Filter:'} />
      <Input handleChange={handleFilterChange} value={filter} />
    </form>
  )
}

const App = (props) => {

  const [name, setName] = useState('a new name')
  const [number, setNumber] = useState('')
  const [contacts, setContacts] = useState(props.contacts)
  const [filter, setFilter] = useState('')

  const addNew = (event) => {
    event.preventDefault()
    const newContact = {
      id: contacts.length + 1,
      name: name,
      number: number
    }

    if(isTextEmpty(name)){
      return alert('Name cannot be blank')
    }

    if(isTextEmpty(number)){
      return alert('Number cannot be blank')
    }

    if(isArrayEmpty(contacts)){
      return alert(`${name} already exist`)
    }
    setContacts(contacts.concat(newContact))
    setName('')
    setNumber('')
  }

  const isArrayEmpty = (array) => {
    let bool = false
    if(array.filter(object => object.name === name ).length > 0){
      bool = true
    }
    return bool
  }

  const isTextEmpty = (text) => {
    let bool = false
    if(text === ""){
      bool = true
    }
    return bool
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleFilterChange = (event) => setFilter(event.target.value)

  const contactFormProps = {
    addNew,
    handleNameChange,
    handlePhoneNumberChange,
    name,
    number
  }

  return(
    <div>
      <Header title={'Phonebook'} />
      <ContactForm {...contactFormProps}  />
      <br></br>
      {contacts.length === 0 ? '' : <Header title={'Numbers'} />}
      <SearchForm handleFilterChange={handleFilterChange} value={filter}  />
      <br />
      <Contacts setContacts={setContacts} contacts={contacts} filter={filter} />
    </div>
  )
}

export default App;
