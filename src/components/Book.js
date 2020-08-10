import React, { Component } from 'react'
import '../sass/book.scss'

class Book extends Component {
    render(){
        return (
            <div className="book">
                <a href={this.props.book.website}>
                    <img src={this.props.book.src} alt={this.props.book.title} />
                    <h4>{this.props.book.title}</h4>
                </a>
                <div class="summary">
                    <p>{this.props.book.author}</p>
                    <small>{this.props.book.description}</small>
                    <p>Pages: {this.props.book.pages} </p>
                </div>
            </div>
        );
    }
}

export default Book