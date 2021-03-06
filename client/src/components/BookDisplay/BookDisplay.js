import React from "react";
import PropTypes from "prop-types";
import Book from "../Book";

const BookDisplay = props => (
  <ol className="books-grid"
    children={props.collection.map((book, index) => (
      <li key={book.title + index}>
        <Book
          shelfChanger={props.changeHandler}
          shelfName={book.shelf}
          title={book.title}
          authors={
            book.authors && book.authors.join(", ")
          }
          cover={
            book.imageLinks ? book.imageLinks["thumbnail"] : 'url("./image/image_not_avail.png")'
          }
          refId={book.id}
        />
      </li>
    ))}
  />
);

BookDisplay.propTypes = {
  collection: PropTypes.array.isRequired,
  changeHandler: PropTypes.func.isRequired
}

export default BookDisplay;
