//ayesha waheed FA20-BSE-068
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../../redux/slices/bookSlice';
import BookInfo from './BookInfo.js';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDelete = (itemId) => {
    dispatch(deleteBook({ itemId }));
  };

  const handleRead = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <h2>Books List</h2>
      <ul className='list-group'>
        {books.map((book) => (
          <li
            key={book.item_id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <div>
              <strong>{book.title}</strong> by {book.author} ({book.category})
            </div>
            <div className='btn-group' role='group'>
              <button type='button' className='btn btn-primary' onClick={() => handleRead(book)}>
                See details
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => handleDelete(book.item_id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedBook && (
        <BookInfo
          title={selectedBook.title}
          author={selectedBook.author}
          category={selectedBook.category}
        />
      )}
    </div>
  );
};

export default BooksList;
