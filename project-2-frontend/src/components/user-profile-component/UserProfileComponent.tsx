import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardHeader, CardBody, CardColumns, CardText, CardFooter, Button } from "reactstrap";
import { Link } from "react-router-dom";


export class UserProfileComponent extends React.Component<any, any> {

    render(){
        return(
            <div className="">
                <Card> 
                    <CardHeader tag="h4">User Information</CardHeader>
                    <CardBody>
                        <CardColumns>First Name: 
                            <CardText>{}</CardText>
                        </CardColumns>
                        <CardColumns>Last Name: 
                            <CardText>{}</CardText>
                        </CardColumns>
                        <CardColumns>User Email:
                            <CardText>{}</CardText>
                        </CardColumns>
                    </CardBody>
                <CardFooter>
                    <Link to="/edit">
                        <Button>Edit Profile</Button>
                    </Link>
                </CardFooter>
                </Card>
            </div>
        )
    }
}