import img1 from '../imagenes/img1.jpg';
import img2 from '../imagenes/img2.jpg';
import img3 from '../imagenes/img3.jpg';

function Greeting(props) {
    const titulo = "Bienvenidos"
    return (
        <div>
            <h1>{titulo}!</h1>
        </div>
    )
}


const Data = {
    productData: [
        {
            id: 1,
            img: img1,
            title: 'Uvas',
            desc: '',
            price: 40,
        },

        {
            id: 2,
            img: img2,
            title: 'Sandias',
            desc: '',
            price: 60,
        },

        {
            id: 3,
            img: img3,
            title: 'Limones',
            desc: '',
            price: 50,
        },
    ]
};

export default Data;
