import React from 'react'
import Label from './Label'
import Input from './Input'

const SearchForm = ({handleFilterChange, filter}) => {
    return(
      <form>
        <Label text={'Filter:'} />
        <Input handleChange={handleFilterChange} value={filter} />
      </form>
    )
  }

export default SearchForm