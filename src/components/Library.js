import React from 'react';
import booksData from '../booksData';
import Book from './Book';
import './library.scss';

const Library = () => {
    const myBooks = booksData.map(book => <Book key={book.id} book={book} />)

    return (
        <div id="library">
            { myBooks }
        </div>
    );
}

export default Library