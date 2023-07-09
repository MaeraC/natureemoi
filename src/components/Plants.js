import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import cart from "../assets/cart-green.png"

function Plants() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetchImages()
    })

    const fetchImages = async () => {
        try {
            const response = await fetch("datas.json")
            const data = await response.json()
            setPlants(data.plants)
        }
        catch (error) {
            console.error("Error fetching images:", error)
        }
    }

    return (
        <section className="plants">
            <div className="title">
                <h1>Nos plantes</h1>
                <span></span>
            </div>
            <div className="container">
                {plants.map((image, index) => (
                    <Link to={`/product/${index}`} key={index}>
                    <figure>
                        <img src={image.url} alt={image.name} />
                        <figcaption>
                            <div>
                                <h2>{image.name}</h2>
                                <button ><img src={cart} alt="ajouter au panier" /></button>
                            </div>
                            <div>
                                <p>{image.oldPrice}€</p>
                                <p>{image.price}€</p>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
                ))}
            </div>
            <Link to="/toutes-les-plantes" className="button link">Voir plus</Link>
        </section>
    )
}

export default Plants