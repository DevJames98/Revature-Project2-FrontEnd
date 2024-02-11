import { IState } from "../../reducers";
import { connect } from "react-redux";
import { SearchInventoryByTypeComponent } from "../search-inventory-by-type-component/SearchInventoryByTypeComponent";
import { SearchInventoryByTypeActionMapper } from '../../action-mappers/search-inventory-by-type-action-mapper'

// this is the file to connects login Component to redux
// we define to config objects
// the first attachs data to Login Comp
// the second attachs action mappers to Login Comp

// this is how we choose what data to pass into a component
const mapStateToProps = (state:IState) =>{
    return {
        inventoryByType: state.searchInventoryByType.inventoryByType,    
        //currentInventory
        typeId: state.searchInventoryByType.typeId,                               
        errorMessage: state.searchInventoryByType.errorMessage 
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    SearchInventoryByTypeActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(SearchInventoryByTypeComponent)