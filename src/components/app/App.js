import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BookService from '../../service/bookService';
import Categories from '../categories/categories';
import Books from '../books/books';
import Header from '../header/header';
import BookAdd from '../book-add/book-add';
import BookEdit from '../book-edit/book-edit';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      books: [],
      authors: [],
      selectedBook: {},
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Books books={this.state.books} delete={this.deleteBook} take={this.takeBook} />} />
          <Route path='books'
            element={
              <Books
                books={this.state.books}
                delete={this.deleteBook}
                take={this.takeBook}
                fetch={this.getBook}
              />}
          />
          <Route path='books/edit/:id' element={
            <BookEdit
              editBook={this.editBook}
              book={this.state.selectedBook}
              categories={this.state.categories}
              authors={this.state.authors}
            />}
          />
          <Route path='books/add' element={<BookAdd addBook={this.addBook} categories={this.state.categories} authors={this.state.authors} />} />
          <Route path='categories' element={
            <Categories categories={this.state.categories} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  loadCategories = () => {
    BookService.listCategories().then((data) => {
      this.setState({
        categories: data.data
      });
    });
  };

  loadBooks = () => {
    BookService.listBooks().then((data) => {
      this.setState({
        books: data.data
      });
    });
  };

  loadAuthors = () => {
    BookService.listAuthors().then((data) => {
      this.setState({
        authors: data.data
      });
    });
  };

  deleteBook = (id) => {
    BookService.deleteBook(id).then((_) => {
      this.loadBooks();
    });
  };

  takeBook = (id) => {
    BookService.takeBook(id).then((_) => {
      this.loadBooks();
    });
  };

  addBook = (book) => {
    BookService.addBook(book).then((_) => {
      this.loadBooks();
    });
  };

  editBook = (book) => {
    BookService.editBook(book).then((_) => {
      this.loadBooks();
    });
  };

  getBook = (id) => {
    BookService.getBook(id).then((data) => {
      console.log(data);
      this.setState({
        selectedBook: data.data
      });
    });
  };

  componentDidMount() {
    this.loadCategories();
    this.loadBooks();
    this.loadAuthors();
  }

}

export default App;
