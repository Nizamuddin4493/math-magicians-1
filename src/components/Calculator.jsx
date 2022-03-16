import React, { Component } from 'react';
// prettier-ignore
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <Container>
        <Row className="m-2">
          <Col>
            <div dir="ltr" className="w-100 p-2 result">
              {total}
              {operation}
              {next}
            </div>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>AC</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>+/-</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>%</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={this.clickHandler} >
              /
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>7</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>8</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>9</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={this.clickHandler}>
              x
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>4</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>5</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>6</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={this.clickHandler}>
              -
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>1</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>2</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>3</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={this.clickHandler}>
              +
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col xs={6}>
            <Button className="w-100 p-4" onClick={this.clickHandler}>0</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>.</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 btn-warning" onClick={this.clickHandler}>
              =
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;