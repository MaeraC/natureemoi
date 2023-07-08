import { useEffect, useState } from "react"

function FilterPlants() {
    const [allPlants, setAllPlants] = useState([])
    const [miniPlants, setMiniPlants] = useState([])
    const [maxiPlants, setMaxisPlants] = useState([])
    const [flowers, setFlowers] = useState([])
    const [selectedFilter, setSelectedFilter] = useState("all")

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
    }

    return (
        <>
        <section className="filter-plants">
            <h2>Filtres</h2>
            <ul>
                <li><button className="button" onClick={() => handleFilterClick("all")}>Toutes les plantes</button></li>
                <li><button className="button" onClick={() => handleFilterClick("maxiPlants")}>Les maxis plantes</button></li>
                <li><button className="button" onClick={() => handleFilterClick("miniPlants")}>Les minis plantes</button></li>
                <li><button className="button" onClick={() => handleFilterClick("flowers")}>Les fleurs</button></li>
            </ul>
        </section>
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
                return false
            })
            .map((plant, index) => (
                <figure key={index}>
                    <img src={plant.url} alt={plant.name} />
                    <figcaption>
                        <h2>{plant.name}</h2>
                        <p>{plant.price}€</p>
                    </figcaption>
                </figure>
            ))}
        </section>
        </>
    )
}

export default FilterPlants
