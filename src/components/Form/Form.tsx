import { useFormik } from 'formik';
import { FC } from 'react';
import { useDispatch } from 'react-redux'
import { addDataValue } from '../../redux/features/cart/cartSlice';
import { FormInputs } from './formData';


const ListForm: FC<{ isOpenForm: boolean }> = ({ isOpenForm }) => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            count: '',
        },
        onSubmit: values => void dispatch(addDataValue(
            {
                title: values.title,
                id: Math.random(),
                rating: { rate: 1, count: parseInt(values.count) },
                image: '',
                description: '',
                category: '',
                price: parseInt(values.price),
                totalPrice: parseInt(values.price)
            }))
    });

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`listForm ${isOpenForm ? 'active' : ''}`}>
            <form className='listForm__container' onSubmit={formik.handleSubmit}>

                {
                    FormInputs.map(({ id, name, type, placeholder }) => (
                        <input
                            key={`${id}`}
                            id={id}
                            name={name}
                            type={type}
                            onChange={formik.handleChange}
                            /* @ts-ignore */
                            value={formik.values[`${id}`]}
                            placeholder={placeholder}
                        />
                    ))
                }
                <button className='listForm__container__button' type="submit">Add</button>
            </form >
        </div >
    );
};

export default ListForm 