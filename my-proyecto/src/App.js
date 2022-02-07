import React from 'react';
import './App.css';
import { NavBar } from './componets/navbar/navbar';
import { Button } from './componets/navbar/button'
import { ItemCount } from './componets/Items/itemCount';




const App = () => {
    return (
        <>
            <NavBar />
            <ItemCount stock="10" />


        </>
    )
}

export default App;