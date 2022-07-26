import { Router, Route, Set } from '@redwoodjs/router'

import BooksLayout from 'src/layouts/BooksLayout'

import BookLayout from 'src/layouts/BookLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BooksLayout}>
        <Route path="/books/new" page={BookNewBookPage} name="newBook" />
        <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
        <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
        <Route path="/books" page={BookBooksPage} name="books" />
      </Set>
      <Set wrap={BookLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
