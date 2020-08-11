import React, { Component } from 'react'
import BookForm from './EditForm'
import BookSummary from './BookSummary'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'

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


    
    render() {
        return (

            <div className={`
                book
                ${ this.state.isHearted ? 'read' : '' }
            `} >

                { 
                    this.state.editMode ? 
                    <BookForm book={this.state.book} /> : 
                    <BookSummary book={this.state.book} /> 
                }

                <p className="actions">

                    <FontAwesomeIcon 
                        icon={faHeart} 
                        onClick={this.markFavorite} 
                    />

                    
                    <FontAwesomeIcon
                        icon={faEdit}
                        onClick={ this.editMode }
                    />

                    <FontAwesomeIcon 
                        icon={faTimes} 

                    />
                </p>
                
            </div>
        );
    }
}

export default Book