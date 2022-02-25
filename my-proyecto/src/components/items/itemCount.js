import React, { useState } from "react";


function ItemCount() {
    const [count, setCount] = useState(1);

    return (
        <div className="my-5">
            <h1 className="my-5"> {count}</h1>
            <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>+</button>
            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
        </div >
    );



};

export default ItemCount;