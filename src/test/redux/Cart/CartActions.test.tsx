import { store } from './../../../redux/utils/app/store';

describe('state tests', () => {
    it('slice state', () => {
        const state = store.getState().cartSlice
        expect(state).toEqual({
            data: [],
            isOpen: false,
            error: null,
            loading: false,
            totalPrice: []
        })
    })
})