import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);

    return (
        <ProductContext.Provider value={{ carts, setCarts }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;