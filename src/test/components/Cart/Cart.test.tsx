
import { render, screen } from '@testing-library/react';
import { MouseEvent } from 'react';
import CartHeader from './../../../components/Cart/CartHeader';


const cartHeaderData = {
    totalPriceCount: 1,
    openForm: (e: MouseEvent<HTMLButtonElement>) => { }
}



describe('cart-components', () => {

    const mockChildComponent = jest.fn();

    test("If CartHeader is not passed open, ChildComponent is not called", () => {
        render(<CartHeader {...cartHeaderData} />);
        expect(mockChildComponent).not.toHaveBeenCalled();
    });

    test('render test', () => {
        render(<CartHeader {...cartHeaderData} />)
        expect(screen.getByText('Cart Items')).toBeInTheDocument()
        expect(screen.getByText('total price:')).toBeInTheDocument()
        expect(screen.getByText('Add Item')).toBeInTheDocument()
    })

    test('CartHeader snapshot', () => {
        render(<CartHeader {...cartHeaderData} />)
        expect(screen).toMatchSnapshot()
    })

})