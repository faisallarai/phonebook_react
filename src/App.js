import React,{useState} from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'


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
