import React, { Component } from 'react'

import Form from './Form'
import BookSummary from './BookSummary'

import '../sass/book.scss'


class Book extends Component {

    constructor(props){
        super()
        this.state = {
            ...props,
            isHearted: false,
            editMode: false,
            hide: false

        }

        this.markFavorite = this.markFavorite.bind(this)
        this.editMode = this.editMode.bind(this)
        this.hideBook = this.hideBook.bind(this)

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
    
    handleSubmit() {
        console.log( 'click' )

        this.setState( prevState => {
            return { ...prevState, editMode: false }
        })
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

    hideBook(){
        this.setState( prevState => {
            return { ...prevState, hide: true }
        })
    }

    render() {
        return (

            <div className={`
                book
                ${ this.state.isHearted ? 'read' : '' }
                ${ this.state.hide ? 'hide' : '' }
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
                        handleDelete={this.hideBook}
                    /> 
                }
                
            </div>
        );
    }
}


export default Book