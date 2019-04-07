import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

import "./App.css";

class App extends Component {
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  };

  componentDidMount() {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  }
  giveDiscountHandle = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="5">
            <Card className="purchase-card">
              <Card.Body>
                <Subtotal price={this.state.total.toFixed(2)} />
                <PickupSavings price={this.state.pickupSavings} />
                <TaxesFees taxes={this.state.taxes.toFixed(2)} />
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <EstimatedTotal
                    price={this.state.estimatedTotal.toFixed(2)}
                  />
                  <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                </ListGroupItem>
                <ListGroupItem>
                  <PromoCode
                    giveDiscount={() => this.giveDiscountHandle()}
                    isDisabled={this.state.disablePromoButton}
                  />
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
