import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from "react";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);




const Root = () => {
    const {products, initialCart} = useLoaderData();
    const[cart,setCart] = useState(initialCart);
    // console.log(products);

    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart,setCart]}> 
                <Header/>
                <Outlet/>
                <Footer/>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Root;

//setCart use kore j kuno smy cart update krte parbe tai value te cart,setCart pass krbo, 
// cart update krle ak jaygay teke na  root means ekane update hobe

/* cart er modde first e data ante hobe
 routes teke loader er modde teke akisate cart er data, product er data pabo
 cart er data paite hole  cart er data localstorage.getItem kore ante hobe
 products er data products.json teke fetch kore ante hobe
ai sb gula kaj alada loader function er modde krte pari

cart er data proyojn jate aksate root er modde product and cart 2ta kei akta loader er maddome load kore
2 ta context er modde share kore dite pari sbar sate
*/