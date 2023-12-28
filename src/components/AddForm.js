//ayesha waheed FA20-BSE-068
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/bookSlice';
import './AddForm.css'; 

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, category }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2 className='form-title'>Insert Book</h2>
        <form onSubmit={handleAddBook}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author</label>
            <input
              type='text'
              className='form-control'
              id='author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <input
              type='text'
              className='form-control'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
