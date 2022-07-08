import { LOGO_URL } from "../../constants/api"
import { setIsOpen } from "../../redux/features/cart/cartSlice"
import CartIcon from "../Svg-icons/CartIcon"
import { useDispatch } from 'react-redux';
import { useAppSelector } from "../../redux/utils/app/hooks";


const Header = () => {
    const dispatch = useDispatch()

    const { data } = useAppSelector(({ cartSlice }) => ({
        data: cartSlice.data,
    }))
    return (
        <header className={'header'}>
            <div className='header__container'>
                <div className='header__container__logo'>
                    <img src={LOGO_URL} alt="logo not found" />
                </div>
                <div className='header__container__cart' onClick={() => dispatch(setIsOpen(true))}>
                    <CartIcon />
                    <div className='header__container__cart__count'>{data.length}</div>
                </div>
            </div>
        </header >
    )
}
export default Header