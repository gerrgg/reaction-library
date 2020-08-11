import React, {Component} from 'react';
import booksData from '../booksData';
import Book from './Book';
import '../sass/library.scss';

class Library extends Component {

    constructor(){
        super()

        this.state = {
            booksData: booksData
        }
    }
    
    render(){
        let myBooks = booksData.map(book => <Book key={book.id} book={book} />)

        
        return (
            <main>
                <div id="library">
                    { myBooks }
                </div>
            </main>
        );
    }

}

export default Library