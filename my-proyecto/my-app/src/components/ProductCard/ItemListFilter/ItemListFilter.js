
import React from "react";
import { useNavigate } from "react-router-dom";


const ItemListFilter = ({ type }) => {
    let navigate = useNavigate();
    //Navega en chambio de opcion en el select
    function handleChange(value) {
        if (value === "Todo") {
            navigate(`/`);
        } else {
            navigate(`/category/${value}`);
        }
    }
    //El default value dice en que opcion inicia, si no recive valor inicia en la primera opcion
    return (
        <form>
            <label htmlFor="itemListFilter"><b>Categoria: </b></label>
            <select defaultValue={type} onChange={event => handleChange(event.target.value)} id="itemListFilter">
                <option value="Todo">Todo</option>
                <option value="Frutas">Frutas</option>
                <option value="Verduras">Verduras</option>
                <option value="Frutos secos">Frutos secos</option>
            </select>
        </form>
    )
}

export default ItemListFilter