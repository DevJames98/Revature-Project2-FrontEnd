import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'
import { Inventory } from '../../models/Inventory'
import { Type } from '../../models/type'
import { Brand } from '../../models/brand'
import { Redirect } from 'react-router'

interface IInventoryInfoProps{
    currentInventory: Inventory
}

export class InventoryInfoComponent extends React.Component<IInventoryInfoProps,any>{

    render(){
        return(
            this.props.currentInventory.type.typeId ? 
            <Card body inverse color="primary">
            //body outline color="danger">
            <CardText>{this.props.currentInventory.type}</CardText>
            <CardText>{this.props.currentInventory.brand}</CardText>
            <CardText>{this.props.currentInventory.itemDescription}</CardText>
            <CardText>{this.props.currentInventory.price}</CardText>
            <Button color="secondary">Add Item To Cart </Button>
            </Card>  
            :
            this.props.currentInventory.brand.brandId ?
            <Card body inverse color="primary">
            //body outline color="danger">
            <CardText>{this.props.currentInventory.type}</CardText>
            <CardText>{this.props.currentInventory.brand}</CardText>
            <CardText>{this.props.currentInventory.itemDescription}</CardText>
            <CardText>{this.props.currentInventory.price}</CardText>
            <Button color="secondary">Add Item To Cart </Button>
            </Card> 
            :
            <Redirect to='/'/>
        )
    }
}