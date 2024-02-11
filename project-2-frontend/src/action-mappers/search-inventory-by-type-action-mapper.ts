import { Dispatch } from "redux";
import { Inventory } from "../models/Inventory";
import { searchInventoryByTypeId } from "../remote/search-inventory-by-type-remote";

export const InventoryByTypeTypes = {
    GET_INVENTORY_BY_TYPE: 'PROJECT_2_GET_INVENTORY_BY_TYPE',
    FAILED_TO_GET_INVENTORY_BY_TYPE:'PROJECT_2_FAILED_TO_GET_INVENTORY_BY_TYPE'
}

export const SearchInventoryByTypeActionMapper = (typeId: number) => async (dispatch:Dispatch) => {
    // try to get by type id from a remote function
    try{
        let InventoryByType:Inventory[] = await searchInventoryByTypeId(typeId)
        //if we do call dispatch with those users
        dispatch({
            type: InventoryByTypeTypes.GET_INVENTORY_BY_TYPE,
            payload:{
                InventoryByType 
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:InventoryByTypeTypes.FAILED_TO_GET_INVENTORY_BY_TYPE
        })
    }
    //function completes
}