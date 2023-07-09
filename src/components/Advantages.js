import shop from "../assets/magasin.png"
import retrait from "../assets/retrait.png"
import livraison from "../assets/livraison.png"

function Advantages() {
    return (
        <section className="advantages">
            <ul>
                <li>
                    <img src={shop} alt="" />
                    <p>Nos magasins à votre service</p>
                </li>
                <li>
                    <img src={retrait} alt="" />
                    <p>Retrait en magasin en 1H</p>
                </li>
                <li>
                    <img src={livraison} alt="" />
                    <p>Livraison en 24H</p>
                </li>
            </ul>
        </section>
    )
}

export default Advantages