import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        <section className="bestsellers" id="bestsellers">
            <div className="title">
                <h1>Nos meilleures ventes</h1>
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
                                <button className="button2" >+</button>
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
        </section>
    )
}

export default Bestsellers