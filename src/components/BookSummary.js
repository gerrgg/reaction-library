import React, { Component } from 'react'

class BookSummary extends Component {
    constructor( props ){
        super()

    }

    render(){
        return(
            <div className="summary">
                <a target="_blank" rel="noopener noreferrer" href={this.props.book.website}>
                    <img src={this.props.book.src} alt={this.props.book.title} />
                </a>

                <a target="_blank" rel="noopener noreferrer" href={this.props.book.website}>
                    <h4 className="title">{this.props.book.title}</h4>
                </a>

                <p className="author">{ this.props.book.author }</p>
            </div>
        )
    }
}

export default BookSummary
