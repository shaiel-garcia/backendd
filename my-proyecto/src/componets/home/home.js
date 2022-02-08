import React from "react";
import Card from "../card/card";
import Data from "../../container/data";

const Home = () => {
    return (
        <>
            <h1 className="text-center mt-3">Nuestros Productos</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {Data.productData.map((item, index) => {
                        return (
                            <Card img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;