import { useEffect, useState } from "react"

function Bestsellers() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetchImages()
    })

    const fetchImages = async () => {
        try {
            const response = await fetch("datas.json")
            const data = await response.json()
            setPlants(data.bestsellers)
        }
        catch (error) {
            console.error("Error fetching images:", error)
        }
    }

    return (
        <section className="bestsellers">
            <div className="title">
                <h1>Nos meilleures ventes</h1>
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
        </section>
    )
}

export default Bestsellers