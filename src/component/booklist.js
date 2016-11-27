import React from 'react';
import Book from './book';
import Form from './form';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books };

    // this.deleteBook = this.deleteBook.bind(this);
  }
  deleteBook = (id) => {

    const currentBooks = this.state.books;
    const books = currentBooks.filter(book => book.id !== id);
    // console.log(books);
    this.setState({ books });
  }
  addBook = ( title, price ) => {
    this.setState({
      books: this.state.books.concat({
        id: Date.now(),
        title,
        price
      })
    });
  }
  render() {
    return (
      <ul className='book-list'>
        {this.state.books.map(book => {
          return (
            <Book 
              key={book.id} 
              book={book}
              author={this.props.authors[book.authorId]}
              handleDelete={this.deleteBook}
            />
          );  //.bind(this)
        })}
        <Form addBookAction={this.addBook} />
      </ul>
    );
  }
};

export default BookList;