//ayesha waheed FA20-BSE-068
import React, { Fragment } from 'react';
import './BookInfo.css'; 

const BookInfo = ({ title, author, category }) => {
  return (
    <Fragment>
      <h2 className="book-info-title">Book Details</h2>
      <div className="book-info-alert" role="alert">
        <strong>{title}</strong> by {author} ({category})
      </div>
    </Fragment>
  );
};

export default BookInfo;
