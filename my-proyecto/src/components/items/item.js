import React from "react";
import ItemCount from "../items/itemCount"


const Item = (props) => {

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.props.img} class="card-img-top img-fluid" />
                <div class="card-body text-center">
                    <h5 class="card-title">{props.props.title}</h5>
                    <h5 class="card-title">${props.props.price}</h5>
                    <p class="card-text">{props.props.desc}</p>
                    <ItemCount></ItemCount>
                    <button class="btn btn-success">Agregar a tu carrito</button>
                </div>
            </div>
        </div>
    );
};





export default Item;