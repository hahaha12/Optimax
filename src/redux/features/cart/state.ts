import { ICartType } from './model';

export const initialState: ICartType = {
    data: [],
    isOpen:false,
    error: null,
    loading: false,
    totalPrice:[]
}