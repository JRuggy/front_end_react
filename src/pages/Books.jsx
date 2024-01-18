import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])

  return (
    <div>
      <h1>Jaston Shop</h1>
      <div className="books">
        {books.map(book => (
          <div className="books" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <br />
            <span>
              <NumericFormat disabled value={book.price} displayType={'number'} thousandSeparator={true} />
            </span>
          </div>
        ))}
      </div>
      <div className='container'>
        <button> <Link to="/add">Add New Book</Link> </button>
      </div>
    </div>
  )
}

export default Books