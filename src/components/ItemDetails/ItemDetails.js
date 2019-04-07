import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          className="item-detail-button"
          variant="secondary"
          size="sm"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                src="https://moskeram.ru/upload/iblock/797/797da82f84dbfa8987ec7205227341f5.jpg"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Облицовочный кирпич Облицовочный Одинарный : М-150 размером
                  120x250x65. Цвет коричневый
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{this.props.price}</strong>
                    <br />
                    <strong className="price-strike">{this.props.price}</strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
