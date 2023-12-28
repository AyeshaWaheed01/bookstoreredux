//ayesha waheed FA20-BSE-068
import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Lark',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Non Fiction',
  },
];

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author, category } = action.payload;
      const newBook = {
        item_id: `item${state.length + 1}`,
        title,
        author,
        category,
      };
      return [...state, newBook];
    },
    deleteBook: (state, action) => {
      const { itemId } = action.payload;
      return state.filter((book) => book.item_id !== itemId);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
