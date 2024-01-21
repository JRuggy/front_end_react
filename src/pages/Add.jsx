import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  console.log(book)

  return (
    <div>
      <div className='form'>
        <h1>Add New Book</h1>
        <input onChange={handleChange} name='title' type="text" placeholder='title' />
        <input onChange={handleChange} name='description' type="text" placeholder='description' />
        <input onChange={handleChange} name='price' type="number" placeholder='price' />
        <input onChange={handleChange} name='cover' type="text" placeholder='cover' />

        <button className='formButton' onClick={handleClick}>Add</button>

      </div>
    </div>
  )
}

export default Add