import { ISearchInventoryByTypeState } from ".";
import { AnyAction } from "redux";
import { InventoryByTypeTypes } from "../action-mappers/search-inventory-by-type-action-mapper";


const initialState:ISearchInventoryByTypeState = {
    inventoryByType:[],
    //currentInventory: object,
    typeId: 0,
    errorMessage:''
}

export const searchInventoryByTypeReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case InventoryByTypeTypes.GET_INVENTORY_BY_TYPE:{
            return {
                ...state,
                inventoryByType:action.payload.inventoryByType
            }
        }  
        case InventoryByTypeTypes.FAILED_TO_GET_INVENTORY_BY_TYPE:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Inventory By Type'
            }
        } 
        default:
            return state;
    }
}