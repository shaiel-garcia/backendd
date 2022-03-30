import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import './App.css';
import NavBar from './components/bases/NavBar/NavBar';
import Footer from './components/bases/Footer/Footer';
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ProductCard/ItemComponents/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/Category';
//Libraries
import Swal from 'sweetalert2';


//Lista de productos
const prodList = [
  { name: "Frutillas", id: "001", categoria: "Frutas", type: "Frutas", price: "60", stock: "32", },
  { name: "Broccoli", id: "002", categoria: "Verduras", type: "Verduras", price: "30", stock: "28", },
  { name: "Choclo", id: "003", categoria: "Verduras", type: "Verduras", price: "50", stock: "15", },
  { name: "Zanahoria", id: "004", categoria: "Verduras", type: "Verduras", price: "30", stock: "18", },
  { name: "Almendras", id: "005", catecoria: "Frutos secos", type: "Frutos secos", price: "30", stock: "27", },
  { name: "Mango", id: "006", categoria: "Frutas", type: "Frutas", price: "40", stock: "15", },
  { name: "Banana", id: "007", categoria: "Frutas", type: "Frutas", price: "30", stock: "22", },
  { name: "Mixs", id: "008", categoria: "Frutos secos", type: "Frutos secos", price: "50", stock: "24", },
  { name: "Tomate", id: "009", categoria: "Verduras", type: "Verduras", price: "60", stock: "11", },
  { name: "Naranja", id: "010", categoria: "Frutas", type: "Frutas", price: "70", stock: "10", },
  { name: "Frambuesa", id: "011", categoria: "Frutas", type: "Frutas", price: "40", stock: "7", },
  { name: "Morron", id: "012", categoria: "Verduras", type: "Verduras", price: "30", stock: "9", },
]

function App() {
  //Productos
  const [products, setProducts] = useState(prodList)
  //Canasta
  const [basket, setBasket] = useState([])
  //Funcion que agrega productos a la canasta
  const addBasket = (item, quantity) => {
    const exist = products.find(x => x === item)
    const alreadyBasket = basket.find(x => x.item === item)
    if (alreadyBasket) {
      Swal.fire(
        'Ese producto ya se encuentra en su canasta',
        'Para modificarlo vaya a su canasta por favor',
        'error'
      )
    } else if (exist) {
      let tempBasket = basket
      tempBasket.push({ item: item, quantity: quantity })
      setBasket(tempBasket)
      Swal.fire({
        title: `Item agregado!`,
        text: `Se ha agregado ${quantity} unidad/es de ${item.name} a su canasta.`,
        width: 600,
        padding: '3em',
        color: '#8A2BE2',
        backdrop: `
            rgba(138,43,226,0.4)
        `
      })
    }
  }
  const buyBasket = (bskt, total) => {
    let basketCount = bskt.length
    if (basketCount < 1) {
      Swal.fire(
        'Error',
        'Necesita agregar productos a su canasta para comprar.',
        'error'
      )
    } else {
      let tempProducts = products
      tempProducts.forEach(x => {
        bskt.forEach(y => {
          if (y.item.code === x.code) {
            x.stock -= y.quantity
          }
        })
      })
      Swal.fire(
        'Gracias por comprar',
        `Ha comprado ${basketCount} productos distintos por un total de $${total}`,
        'success'
      )
      setBasket([])
      setProducts(tempProducts)
    }
  }
  //Funcion que remueve productos de la canasta
  const removeBasket = (basketItem) => {
    const alreadyBasket = basket.find(x => x === basketItem)
    if (alreadyBasket) {
      let index = basket.indexOf(basketItem)
      let tempBasket = basket
      tempBasket.splice(index, 1)
      setBasket(tempBasket)
    }
  }
  return (
    <BrowserRouter>
      <NavBar size={basket.length} />
      <Routes>
        <Route path="/" exact element={<Landing prodList={products} />} />
        <Route path="/canasta" element={<Cart basket={basket} removeBasket={removeBasket} buyBasket={buyBasket} />} />
        <Route path="/item/:id" element={<ItemDetailContainer prodList={products} addBasket={addBasket} />} />
        <Route path="/category/:type" element={<Category prodList={products} addBasket={addBasket} />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
