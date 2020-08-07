import React from 'react'
import './book.scss'

const Book = ( props ) => {

    return (
        <div className="book">
            <h4><a href={props.book.website}>{props.book.title}</a></h4>
            <p>{props.book.author}</p>
            <small>{props.book.description}</small>
            <p>Pages: {props.book.pages} </p>
        </div>
    );
}

export default Book