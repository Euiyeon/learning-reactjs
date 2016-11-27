import React from 'react';
import ReactDOM from 'react-dom';
import {data} from './data';

// import Book from './component/book'
import BookList from './component/booklist'

// console.log(BookList);

ReactDOM.render(
  // <App />,
  <BookList books={data.books} authors={data.authors} />,
  document.getElementById('root')
);


