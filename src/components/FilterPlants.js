import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import cart from "../assets/cart-green.png"

function FilterPlants() {
    
    const [allPlants, setAllPlants] = useState([])
    const [miniPlants, setMiniPlants] = useState([])
    const [maxiPlants, setMaxisPlants] = useState([])
    const [flowers, setFlowers] = useState([])
    const [selectedFilter, setSelectedFilter] = useState("all")
    const [priceFilter, setPriceFilter] = useState("");

    useEffect(() => {
        fetchPlants()
    }, [])

    const fetchPlants = async () => {
        const response = await fetch("datas.json")
        const data = await response.json()
        setAllPlants(data.allPlants)
        setMiniPlants(data.miniPlants)
        setMaxisPlants(data.maxiPlants)
        setFlowers(data.flowers)
    }

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter)
        setPriceFilter("")
    }

    return (
        <>
            <aside className="filter-plants">
                <h2>Filtres</h2>
                <ul>
                    <li><button className="button" onClick={() => handleFilterClick("all")}>Toutes les plantes</button></li>
                    <li><button className="button" onClick={() => handleFilterClick("maxiPlants")}>Les maxis plantes</button></li>
                    <li><button className="button" onClick={() => handleFilterClick("miniPlants")}>Les minis plantes</button></li>
                    <li><button className="button" onClick={() => handleFilterClick("flowers")}>Les fleurs</button></li>
                    <li>
                        <select  onChange={(e) => {handleFilterClick("price") ; setPriceFilter(e.target.value) }} className="button">
                            <option value="">Prix</option>
                            <option value="10-20">10€ - 20€</option>
                            <option value="20-30">20€ - 30€</option>
                            <option value="30-50">30€ - 50€</option>
                            <option value="50-100">50€ - 100€</option>
                        </select>
                    </li>
                </ul>
            </aside>
            <section className="results">
                {allPlants
                .filter((plant) => {
                    if (selectedFilter === "all") {
                        return true
                    } 
                    else if (selectedFilter === "miniPlants") {
                        
                        return miniPlants.find((item) => item.name === plant.name)
                    } 
                    else if (selectedFilter === "maxiPlants") {
                        return maxiPlants.find((item) => item.name === plant.name)
                    } 
                    else if (selectedFilter === "flowers") {
                        return flowers.find((item) => item.name === plant.name)
                    }
                    else if (selectedFilter === "price" && priceFilter) {
                        const [minPrice, maxPrice] = priceFilter.split("-");
                        const price = parseInt(plant.price);
                        return price >= parseInt(minPrice) && price <= parseInt(maxPrice);
                    }
                    
                    return false
                })
                .map((plant, index) => (
                    <Link to={`/product/${index}`} key={index}>
                        <figure>
                            <img src={plant.url} alt={plant.name} />
                            <figcaption>
                                <div>
                                    <h2>{plant.name}</h2>
                                    <button ><img src={cart} alt="ajouter au panier" /></button>
                                </div>
                                <div>
                                    <p>{plant.oldPrice}€</p>
                                    <p>{plant.price}€</p>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default FilterPlants
