import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductsComponent from './ProductsComponent';
import axios from 'axios';
import { setProducts } from '../redux/actios/productActions'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const getProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`)
            .catch((error) => {
                console.log('error',error);
            });
        dispatch(setProducts(response.data));
        // console.log(response.data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    console.log('products:',products);

    return (
        <div>
            <p>ProductListing</p>
            <ProductsComponent />
        </div>
    )
}

export default ProductListing
