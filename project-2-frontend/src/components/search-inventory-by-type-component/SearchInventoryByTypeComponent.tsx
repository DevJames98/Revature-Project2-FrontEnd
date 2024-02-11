import React, { SyntheticEvent } from 'react'
import { Inventory } from '../../models/Inventory';
import { InventoryInfoComponent} from '../../components/Inventory-Info/InventoryInfoComponent'
import { Redirect, RouteComponentProps } from 'react-router';
import { CardDeck } from '../card-deck-component/CardDeckComponent';

interface IInventoryTypeProps extends RouteComponentProps{
    inventoryByType:Inventory[]
    currentInventory:Inventory
    typeId:number               
    errorMessage:string
    SeachInventoryByTypeActionMapper: (typeId:number)=>void
}

export class SearchInventoryByTypeComponent extends React.Component<IInventoryTypeProps,any>{
    // runs when component starts to exist
    componentDidMount(){
        //let i
        //for (i=1; i<= 15; i++){
       //   this.props.SeachInventoryByTypeActionMapper(i);
       // }

       //gets the id from props and fills array with items of that type
       this.props.SeachInventoryByTypeActionMapper(this.props.typeId);
          
    }
    
    render(){
        //this.props.inventoryType.typeId ?
        //turn array of users into display components
        let inventoryDisplay = this.props.inventoryByType.map((ele)=>{
            return <InventoryInfoComponent currentInventory={ele} key={ele.type.typeId}/>
        })
        return(
            this.props.typeId ?
            // check for role or redirect
            <CardDeck elementsPerRow={3}>
                {inventoryDisplay}
            </CardDeck>
            :
            <Redirect to='/'/>
        )
    }
}