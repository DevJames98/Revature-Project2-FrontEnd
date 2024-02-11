import {Type} from "../models/type"
import {Brand} from "../models/brand"
export class Inventory{
    itemId: number
    itemDescription: string
    type: Type
    brand: Brand
    price: number 
    stock: number
    constructor(itemId: number, itemDescription: string ,type: Type, brand: Brand, price: number, stock: number){
        this.itemId = itemId
        this.itemDescription = itemDescription
        this.type = type
        this.brand = brand
        this.price = price
        this.stock = stock
    }
}