import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the Book api call
export function BookListItem(props) {
  console.log(props)
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.Thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>Dish Name:</h3>{props.Title}
            <p>
             {props.Ingredients}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.Href}
            >
              Go to Book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
