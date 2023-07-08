import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
                    <figure  key={index}>
                        <img src={image.url} alt={image.name} />
                        <figcaption>
                            <h2>{image.name}</h2>
                            <p>{image.price}€</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <Link to="/toutes-les-plantes" className="button">Voir plus</Link>
        </section>
    )
}

export default Plants