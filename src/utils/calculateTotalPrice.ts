import { DataCartType } from "../redux/features/cart/model";

export const calculateTotalPrice = (data:Array<DataCartType>) => {
    let value = 0 
    for (let key of data) {
         value += key.price 
    }
    return value
}
