import React from "react";
import { useEffect, useState } from "react";
import "./AboutUs.css"

// Img
import gaming from "./../../img/aboutUs/veggie.jpg"
//Libraries
import AOS from "aos";
import 'aos/dist/aos.css';

const AboutUs = () => {
    const [loading, setLoading] = useState(false)
    const loadingEffect = () => {
        AOS.init({
            duration: 2000
        });
        setLoading(true)
    }
    useEffect(() => {
        const load = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(loadingEffect())
            }, 2000)
        });
        load.then()
    }, []);
    return (
        <section className="aboutUsSection">
            <h2 className="aboutUsMainTitle">Sobre Nosotros</h2>
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Terra-Natural</h3>
                    <div className="articleDiv" >
                        <img src={gaming} className="aboutUsImg" data-aos="fade-left" alt="Gaming Library" />
                        <p className="aboutUsDescription" data-aos="flip-right">Somos un emprendimiento de comida vegana que piensa que adquirir este tipo de alimentación procura un mejor equilibrio en lo que consumimos, dandonos una mejor y saludable vida .</p>
                    </div>
                </div>
            </article>}

        </section>
    )
}

export default AboutUs