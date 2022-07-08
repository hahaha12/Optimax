
import { useEffect, Fragment, useState, useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/utils/app/hooks';
import { getCart, setIsOpen } from '../../redux/features/cart/cartSlice';
import CartItems from './CartItems';
import CartHeader from './CartHeader';
import ListForm from '../Form/Form';


const Cart = () => {

    const dispatch = useDispatch()
    const [totalPriceCount, setTotalPriceCount] = useState(0)
    const [isOpenForm, setIsOpenForm] = useState(false)

    const { data, isOpen, totalPriceArr } = useAppSelector(({ cartSlice }) => ({
        data: cartSlice.data,
        isOpen: cartSlice.isOpen,
        totalPriceArr: cartSlice.totalPrice
    }))

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    useEffect(() => {
        let result = 0
        for (let { totalPrice, price } of totalPriceArr) {
            if (totalPrice) {
                result += totalPrice
            } else {
                result += price
            }
        }
        setTotalPriceCount(parseFloat(result.toFixed(2)))
    }, [totalPriceArr])

    const openForm = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        setIsOpenForm(true)
        e.stopPropagation()
    }, [])



    return (
        <>
            {isOpen && (
                <div
                    className={'cart'}
                    onClick={() => dispatch(setIsOpen(false))}
                >
                    <div
                        className='cart__container'
                        onClick={(e) => {
                            setIsOpenForm(false)
                            e.stopPropagation()
                        }}
                    >
                        <CartHeader totalPriceCount={totalPriceCount} openForm={openForm} />
                        <ListForm isOpenForm={isOpenForm} />
                        <div className="cart__container__items-container">
                            {data.map((item, index) => (
                                <Fragment key={item.id}>
                                    <CartItems {...item} index={index} />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart