import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsReusbleComponent from './ProductsReusbleComponent';
import {
    loadProductDetailsStart,
} from 'layout/productDetailsActions';
const MyReusableComponent = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.productDetails.data?.products);
    useEffect(() => {
        dispatch(loadProductDetailsStart());
    }, []);
    console.log('productDataaaaaaa', productData);

    return (
        <div>
            <ProductsReusbleComponent productsData={productData}/>
        </div>
    );
};

export default MyReusableComponent;