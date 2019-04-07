import React, { Component } from "react";
import {
  Button,
  Collapse,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCode extends Component {
  state = {
    open: false
  };

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide  `}
          promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <Row className="show-grid">
            <Col md={12}>
              <Form>
                <FormGroup controlId="formInlineName">
                  <FormLabel>Promo Code</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="enter promo code"
                    value={this.props.promoCode}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  variant="success"
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
