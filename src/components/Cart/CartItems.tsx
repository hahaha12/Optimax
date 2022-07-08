import { memo, FC, useState, ChangeEvent, useEffect } from "react"
import { DataCartType, } from "../../redux/features/cart/model"
import { useDispatch } from 'react-redux';
import { delateDataItem, setData } from "../../redux/features/cart/cartSlice";

interface ICartItemsProps extends DataCartType {
    index: number
}

const CartItems: FC<ICartItemsProps> = memo(({
    title,
    price,
    rating,
    description,
    image,
    index
},) => {

    const dispatch = useDispatch()
    const [itemCount, setItemCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)
    let value = 0

    const decrement = () => {
        if (itemCount !== 1) {
            setItemCount(itemCount - 1)
            value = totalPrice - price
            setTotalPrice(parseFloat(value.toFixed(2)))
        }
    }

    const increment = () => {
        if (itemCount < rating.count) {
            value = totalPrice + price
            setTotalPrice(parseFloat(value.toFixed(2)))
            setItemCount(itemCount + 1)
        }
    }

    const changeItemCount = (e: ChangeEvent<HTMLInputElement>) => {
        if (
            itemCount >= 1 &&
            parseInt(e.target.value) <= rating.count &&
            parseInt(e.target.value)
        ) {
            setItemCount(parseInt(e.target.value))
            value = 0
            value = parseFloat(e.target.value) * price
            setTotalPrice(parseFloat(value.toFixed(2)))
        }
    }

    useEffect(() => {
        dispatch(setData({ num: totalPrice, index: index }))
    }, [dispatch, totalPrice, index])

    return <div className={'items'}>
        <div
            className="items__delete"
            onClick={() => dispatch(delateDataItem(index))}
        >
            x
        </div>
        <div className="items__image">
            <img src={image} alt="#" />
        </div>
        <div className="items__info">
            <h3 className="items__info__title">
                {title}
            </h3>
            <div className="items__info__description">
                {description}
            </div>
        </div>
        <div className="items__count">
            <div className="items__count__counter">
                <div
                    className={`
                    items__count__counter__click 
                    ${itemCount === rating.count ? 'disable' : ''}
                    `}
                    onClick={increment}>+</div>
                <input
                    type="number"
                    value={itemCount}
                    onChange={changeItemCount}
                />
                <div
                    className={`
                    items__count__counter__click 
                    ${itemCount === 1 ? 'disable' : ''}
                    `}
                    onClick={decrement}>-</div>
            </div>
            <div className="items__count__total">
                <div className="items__count__total__count">
                    total count: <span>{rating.count}</span>
                </div>
                <div className="items__count__total__count">
                    price:<span>{price}$</span>
                </div>
                <div className="items__count__total__count">
                    total price:<span>{totalPrice}$</span>
                </div>
            </div>
        </div>
    </div>
})

export default CartItems