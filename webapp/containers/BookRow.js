import React from 'react';
class BookRow extends React.Component {
  render() {
    const BookRow = ({book}) => <tr><td>book.title</td></tr>
    return BookRow;
  }
}
export default BookRow;