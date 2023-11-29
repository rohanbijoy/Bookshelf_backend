const axios = require('axios');

const deleteBook = async (bookId) => {
  try {
    const response = await axios.delete(`http://localhost:5000/books/${bookId}`);
    console.log('Book Deleted Successfully');
  } catch (error) {
    console.error('Error deleting book:', error.message);
  }
};

// Usage: node deleteBook.js 1
const bookIdToDelete = process.argv[2];

if (!bookIdToDelete) {
  console.error('Please provide a valid book ID as a command-line argument.');
} else {
  deleteBook(bookIdToDelete);
}