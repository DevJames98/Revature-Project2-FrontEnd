import { InternalServerError } from "../errors/InternalServerError"
import { projectClient } from "../remote/project-client"
import { Inventory } from "../models/Inventory";

export async function searchInventoryByTypeId(typeId: number): Promise<Inventory[]> {
    try {
        let response = await projectClient.get(`/Inventory/${typeId}`)
        console.log(response)
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}