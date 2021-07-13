import React from 'react'
import './search-box.style.css'

const SearchField = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange} />
)

export default SearchField;