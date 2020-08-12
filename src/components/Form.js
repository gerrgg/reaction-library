import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Form = ({ book, handleChange, onClick }) => (

    <form>

        <label>Title</label>
        <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={book.title}
            onChange={handleChange}
        />

        <label>Author</label>
        <input 
            type="text" 
            name="author" 
            placeholder="Author" 
            value={book.author}
            onChange={handleChange}
        />

        <label>Book Image URL</label>
        <input 
            type="url" 
            name="src" 
            placeholder="URL to book image" 
            value={book.src}
            onChange={handleChange}
        />

        <FontAwesomeIcon 
            icon={faCheck}
            onClick={onClick}
        /> 

    </form>
);

export default Form