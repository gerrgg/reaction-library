import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'


const BookSummary = ({ book, markFavorite, editMode, handleDelete }) => (

    <div className="summary">
        <a target="_blank" rel="noopener noreferrer" href={book.website}>
            <img src={book.src} alt={book.title} />
        </a>
    
        <a target="_blank" rel="noopener noreferrer" href={book.website}>
            <h4 className="title">{book.title}</h4>
        </a>
    
        <p className="author">{book.author}</p>
    
        <p className="actions">
    
            <FontAwesomeIcon 
                icon={faHeart} 
                onClick={markFavorite} 
            />
    
            <FontAwesomeIcon
                icon={faEdit}
                onClick={ editMode }
            />
    
            <FontAwesomeIcon 
                icon={faTimes}
                onClick={handleDelete}
            />

        </p>
    </div>
);


export default BookSummary
