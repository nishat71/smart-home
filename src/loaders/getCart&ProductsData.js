import { getStoredCart } from "../utils/fakeDB";

export const ProductsAndCartData = async () => {
    //get products
    const productsData = await fetch("products.json");
    const products = await productsData.json();



    //get cart
    const savedCart = getStoredCart();
    // console.log('savedCart',savedCart);
    const initialCart = [];
    for (const id in savedCart) {
        const foundProduct = products.find((product) => product.id === id)
        if (foundProduct) {
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            initialCart.push(foundProduct)
        }
    }

    return { products, initialCart };

}



/*
akisate fetch krbo and localstorage teke data get kore ene 2ta aksate loader er modde pass kore dibo
products fetch

savedCart er modde data getStoredCart teke ashbe, getStoredCart e data na takle empty object eshe savedCart e boshbe
*/