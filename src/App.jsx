import React, { useEffect, useState }  from 'react'
import Header from './components/header'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import SearchBook from './components/SearchBook'

function App() {

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books')
    return savedBooks ? JSON.parse(savedBooks) : []
  })

  const [query, setQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  
  const addBook = (book) => {
    setBooks([...books, book])
  }

  const filteredBook = books.filter((book) => 
    book.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Header/>
      <AddBookForm onAdd={addBook}/>
      <SearchBook query={query} setQuery={setQuery}/>
      <BookList books={filteredBook}/>
    </>
  )
}

export default App
