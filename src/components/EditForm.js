import React, { Component } from 'react'

class BookForm extends Component {
    constructor( props ){
        super()
        this.state = { book: props.book }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange( event ){
        const { name, value } = event.target
        console.log( name, value )

        this.setState( { [name]: value } )
    }



    render(){
        return(
            <form>
                <label>Book Image URL</label>
                <input 
                    type="url" 
                    name="src" 
                    placeholder="URL to book image" 
                    value={this.state.book.src}
                    onChange={this.handleChange}
                />

                <label>Title</label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={this.state.book.author}
                    onChange={this.handleChange}
                />

                <label>Author</label>
                <input 
                    type="text" 
                    name="author" 
                    placeholder="Author" 
                    value={this.state.book.title}
                    onChange={this.handleChange}
                />


            </form>
        )
    }
}

export default BookForm