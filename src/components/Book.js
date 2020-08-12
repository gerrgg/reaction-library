import React, { Component } from 'react'
import BookSummary from './BookSummary'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons'

import '../sass/book.scss'


class Book extends Component {
    constructor(props){
        super()
        this.state = {
            ...props,
            isHearted: false,
            editMode: false,

        }

        this.markFavorite = this.markFavorite.bind(this)
        this.editMode = this.editMode.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange( event ){
        const { name, value } = event.target

        this.setState( prevState => {
            let newBook = { ...prevState.book }
            newBook[name] = value

            return { ...prevState, book: newBook }
        } )
    }


    markFavorite() {
        /**
         * Makes the book as already ready
         */
        this.setState( prevState => {
            return { ...prevState, isHearted: !prevState.isHearted }
        })
        
    }

    editMode() {
        this.setState( prevState => {
            return { ...prevState, editMode: !prevState.editMode }
        })
    }

    handleSubmit() {
        console.log( 'click' )

        this.setState( prevState => {
            return { ...prevState, editMode: false }
        })
    }


    
    render() {
        return (

            <div className={`
                book
                ${ this.state.isHearted ? 'read' : '' }
            `} >

                { 
                    this.state.editMode ? 

                    <Form 
                        book={this.state.book}
                        handleChange={this.handleChange}
                        onClick={this.editMode}
                    /> 
                    : 
                    <BookSummary 
                        book={this.state.book}
                        markFavorite={this.markFavorite}
                        editMode={this.editMode}
                    /> 
                }
                
            </div>
        );
    }
}

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

export default Book