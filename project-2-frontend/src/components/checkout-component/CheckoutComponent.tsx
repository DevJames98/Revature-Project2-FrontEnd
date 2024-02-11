import React from "react";
import { Form, FormGroup, Label, Col, Input, Button, Row } from "reactstrap";

//props

//form fields

export class CheckoutComponent extends React.Component<any, any> {
  //Make form fields w/ default state in constructor

  //update state of form values for each field

  //function/action mapper to submit to database

  render() {
    return (
      <div className="display">
        {/* Display forms */}
        <h3>Checkout</h3>
        <Form>
          <FormGroup>
            <Label>Shipping Address</Label>
            {/* <Input plaintext value="Address Information" /> */}
          </FormGroup>
          <Row form>
            <Col sm="6">
              <FormGroup>
                <Label for="firstName" sm={2}>
                  First Name
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  required
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="lastName" sm={2}>
                  Last Name
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="6">
              <FormGroup>
                <Label for="shipping-address-line-1" sm={2}>
                  Address Line 1
                </Label>
                <Input
                  type="text"
                  name="shipping-address-line-1"
                  id="shipping-address-line-1"
                  placeholder="1234 Main St"
                  required
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="shipping-address-line-2" sm={2}>
                  Address Line 2
                </Label>
                <Input
                  type="text"
                  name="address2"
                  id="shipping-address-line-2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="shipping-address-city" sm={2}>
                  City
                </Label>
                <Input
                  type="text"
                  name="shipping-address-city"
                  id="shipping-address-city"
                  required
                />
              </FormGroup>
            </Col>
            {/* figure out how to add country/region selector */}
            <Col md={4}>
              <FormGroup>
                <Label for="shipping-address-state" sm={2}>
                  State
                </Label>
                <Input
                  type="text"
                  name="shipping-address-state"
                  id="shipping-address-state"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="shipping-address-zip" sm={2}>
                  Zip
                </Label>
                <Input
                  type="text"
                  name="shipping-address-zip"
                  id="shipping-address-zip"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="phone" sm={2}>
                  Phone
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="000-000-0000"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          {/* Billing Address */}
          <FormGroup>
            <Label>Billing Address</Label>
            {/* <Input plaintext value="Address Information" /> */}
          </FormGroup>
          {/* Check same as billing and it will autopopulate */}
          <FormGroup check>
            <Input type="checkbox" name="sameAsShipping" id="sameAsShipping" />
            <Label for="sameAsShipping" sm={2} check>
              Same as shipping address
            </Label>
          </FormGroup>
          <Row form>
            <Col sm="6">
              <FormGroup>
                <Label for="billing-address-line-1" sm={2}>
                  Address
                </Label>
                <Input
                  type="text"
                  name="billing-address-line-1"
                  id="billing-address-line-1"
                  placeholder="1234 Main St"
                  required
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="billing-address-line-2" sm={2}>
                  Address 2
                </Label>
                <Input
                  type="text"
                  name="billing-address-line-2"
                  id="billing-address-line-2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="billing-address-city" sm={2}>
                  City
                </Label>
                <Input
                  type="text"
                  name="billing-address-city"
                  id="billing-address-city"
                  required
                />
              </FormGroup>
            </Col>
            {/* figure out how to add country/region selector */}
            <Col md={4}>
              <FormGroup>
                <Label for="billing-address-state" sm={2}>
                  State
                </Label>
                <Input
                  type="text"
                  name="billing-address-state"
                  id="billing-address-state"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="billing-address-zip" sm={2}>
                  Zip
                </Label>
                <Input
                  type="text"
                  name="billing-address-zip"
                  id="billing-address-zip"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          {/* Payment Information */}
          <FormGroup>
            <Label>Card Information</Label>
            {/* <Input plaintext value="Address Information" /> */}
          </FormGroup>
          <Col sm="7">
            <FormGroup>
              <Label for="card-number" sm={2}>
                Card Number
              </Label>
              <Input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="0000000000000000"
                required
              />
            </FormGroup>
          </Col>
          {/* render shopping cart item info component/summary*/}
          <p>*render shopping cart items + summary*</p>
          <FormGroup check>
            <Input type="checkbox" name="terms" id="terms" required />
            <Label for="terms" sm={2} check>
              I agree to terms and conditions
            </Label>
          </FormGroup>
          <Button color="success">Place Order</Button>
        </Form>

        {/* Display order info if forms were successfully submitted */}
      </div>
    );
  }
}
