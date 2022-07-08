import { FC, memo, MouseEvent } from 'react';


const CartHeader: FC<{
    totalPriceCount: number;
    openForm: (e: MouseEvent<HTMLButtonElement>) => void
}> = memo(({ totalPriceCount, openForm }) => {
    return (
        <div className='cart-header' >
            <div className='cart-header__info'>
                <h2>Cart Items</h2>
                <div>
                    total price: <span>{totalPriceCount}$</span>
                </div>
            </div>
            <div className='cart-header__buttons'>
                <button type='button' onClick={openForm}>Add Item</button>
                <button>BUY</button>
            </div>
        </div>
    )
})

export default CartHeader