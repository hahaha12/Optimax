export interface ICartType   {
    data: Array<DataCartType>;
    error: string | null;
    loading: boolean;
    isOpen: boolean;
    totalPrice: Array<DataCartType>
}

export type DataCartType = {
    title: string,
    image: string,
    id: number ,
    price: number,
    rating: { rate: number, count: number  },
    description: string,
    category: string;
    totalPrice?:number
} 

