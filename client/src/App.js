import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    Books: [],
    BookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get Books update the Books state
    event.preventDefault();
    API.searchBooks(this.state.BookSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ Books: res.data });
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="BookSearch"
                        value={this.state.BookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <h1>Render Books Here</h1>
              <BookList>
                {this.state.Books.map(Book =>{
                  return(
                    <BookListItem 
                      Thumbnail = {Book.thumbnail}
                      Title = {Book.title}
                      Href = {Book.href}
                      Ingredients = {Book.ingredients}/>
                  )
                })}
              
              </BookList>

              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

