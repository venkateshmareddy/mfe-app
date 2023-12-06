import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsReusbleComponent from './ProductsReusbleComponent';
import {
    fetchProductDetails,
} from 'layout/productSlice';
const MyReusableComponent = () => {
    const dispatch = useDispatch();
    const {loading, reposList} = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchProductDetails());
    }, []);

    return (
        <div>
            {!loading && <ProductsReusbleComponent productsData={reposList?.products}/>}
        </div>
    );
};

export default MyReusableComponent;