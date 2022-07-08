import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductData } from "../../../api/api";
import { DataCartType, ICartType } from "./model";
import { initialState } from './state';

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload
        },

        setIsOpen: (state, { payload }: PayloadAction<boolean>) => {
            state.isOpen = payload
        },

        setData: (state, { payload }: PayloadAction<{num:number, index:number }>) =>  {
            const data = [...state.data]
            data[payload.index].totalPrice = payload.num  
            state.totalPrice = data
        },
        
        addDataValue: (state, { payload }: PayloadAction<DataCartType>) => {
             state.data = [payload, ...state.data]
        },

        delateDataItem: (state, { payload }: PayloadAction<number>) => {
            const value = [...state.data]
            value.splice(payload, 1)
            state.data = value
        },

        getCartData: (state, { payload }: PayloadAction<Array<DataCartType>>) => {
             state.data = payload
        },

    }
})

export const getCart = ():any => async (dispatch:any) => {
    dispatch(setLoading(true))
    try {
        const {data} = await getProductData()
          dispatch(setLoading(false))
          dispatch(getCartData(data))
    }
    catch (err:any) {
        throw Error(err)
    } finally {
        console.log('request send');
        
    }
    
}

export const {
    getCartData,
    setLoading,
    setIsOpen,
    setData,
    addDataValue,
    delateDataItem
} = cartSlice.actions


export default cartSlice.reducer