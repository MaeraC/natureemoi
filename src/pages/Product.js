import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import livraison from "../assets/livraison-green.png"
import client from "../assets/client-green.png"
import garantie from "../assets/garantie-green.png"

function Product() {
    const { index } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const response = await fetch("/datas.json")
        const data = await response.json()
        setProduct(data.allPlants[index])
    }

    if (!product) {
        return <div>Loading...</div>; // METTRE LE LOADER 
    }
    console.log(product.url)

    return (
        <>
        <Nav />
        <section className="product-page">
            <div className="product">
                <img src={`.${product.url}`} alt={product.name} />
                <div className="infos">
                    <div className="head">
                        <h1>{product.name}</h1>
                        <ul>
                            <li>{product.oldPrice}</li>
                            <li>{product.price}€</li>
                        </ul>
                    </div>
                    <div className="description">
                        {product.description}
                    </div>
                    <ul className="btn-cart">
                        <button className="button">Ajouter au panier</button>
                        <div>
                            <label htmlFor="quantity">Quantité</label>
                            <input type="number" name="quantity" />
                        </div>
                    </ul>
                    <ul className="garantees">
                        <li><img src={livraison} alt="livraison express" /> Livraison express à domicile</li>
                        <li><img src={client} alt="service client" />Service client personnalisé</li>
                        <li><img src={garantie} alt="garantie" />Garantie jusqu'à 20 jours</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
       
    )
}

export default Product