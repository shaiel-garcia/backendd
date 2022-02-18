import { useState, createContext } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        item.quantity = quantity
        if (isInCart(item.id)) {
            updateItem(item.id, quantity)

        } else {
            setProducts([...products, item])
        }

    }

    const updateItem = (id, quantity) => {
        let indexElement = getIndexItem(id)
        let productCopy = [...products]
        productCopy[indexElement]["quantity"] = quantity
        setProducts(productCopy)

    }

    const getIndexItem = (id) => {
        return products.findIndex(
            (element) => {
                return element.id == id
            }
        )
    }

    const removeItem = ({ itemId }) => {
        let indexElement = getIndexItem(itemId)
        let productCopy = [...products]
        productCopy.splice(indexElement)
        setProducts(productCopy)
    }

    const clear = () => {
        setProducts([])

    }

    const isInCart = (id) => {
        let inArray = products.filter(
            (item) => {
                return item.id == id
            }
        )


        return inArray.length > 0

    }


    return (
        < CartContext.Provider value={{ products, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )


}