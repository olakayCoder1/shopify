import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([
        {
            "product": {
                "id": 10,
                "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                "price": 109,
                "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                "rating": {
                    "rate": 2.9,
                    "count": 470
                }
            },
            "quantity": 1
        },
        {
            "product": {
                "id": 10,
                "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                "price": 109,
                "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                "rating": {
                    "rate": 2.9,
                    "count": 470
                }
            },
            "quantity": 1
        }
    ]);

    const addToCart = (product) => {

        const foundProduct = cart.find((curr) => curr.product === product);

        if (foundProduct) {
            setCart((prev) => prev.map((curr) => {
                return curr.product === product ? { ...curr, quantity: curr.quantity + 1 } : curr;
            }))
          } else {
            setCart((prev) => [...prev, { product, quantity: 1 }]);
          }

    }

    const decreaseQuantity = (product) => {
        const foundProductIndex = cart.findIndex((curr) => curr.product === product);
      
        if (foundProductIndex !== -1) {
          setCart((prev) =>
            prev.map((curr, index) => {
              if (index === foundProductIndex) {
                if (curr.quantity === 1) {
                  return null; // Remove the object from the cart
                } else {
                  return { ...curr, quantity: curr.quantity - 1 };
                }
              }
              return curr;
            }).filter(Boolean) // Filter out any null values to remove the object from the cart
          );
        }
      };
      
      const getTotalQuantity = () => {
        const totalQuantity = cart.reduce((total, curr) => {
          return total + curr.quantity;
        }, 0);
      
        return totalQuantity;
      };
      

      const getTotalPrice = () => {
        const totalPrice = cart.reduce((total, item) => {
          const subtotal = item.quantity * item.product.price;
          return total + subtotal;
        }, 0);
      
        return totalPrice;
      };
      const clearCart = () => {
        setCart([]);
      };

      console.log(cart)
    return (
        <ProductContext.Provider value={{ 
            cart, setCart , addToCart , getTotalPrice,
            decreaseQuantity , clearCart, getTotalQuantity }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;