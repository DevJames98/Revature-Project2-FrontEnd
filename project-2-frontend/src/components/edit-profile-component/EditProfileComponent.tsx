import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export class EditProfileComponent extends React.Component<any, any> {
    
    render() {
        return (
            <div className="display">
                <h3>User Profile Information</h3>
                <Form>
                    <Row form>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username "/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name "/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="address2">Address 2</Label>
                            <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor"/>
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city" placeholder="New York"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="text" name="state" id="state" placeholder="New York"/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="zip">Zip</Label>
                            <Input type="text" name="zip" id="zip" placeholder="10036"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}