import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <nav>
            <img src={logo} alt="Logo NaturEmoi" />
                <ul>
                    <li>Accueil</li>
                    <li>Nos meilleures ventes</li>
                    <li><Link to="/toutes-les-plantes">Nos plantes</Link></li>
                    <li><Link to="/accessoires">Nos accessoires</Link></li>
                </ul>
            </nav>
            <div className='slogan'>
                <div>
                    <p>Respirez la nature avec <span>NaturEmoi</span>,</p>
                    <p>Un oasis de verdure pour les amoureux des plantes.</p>
                </div>
            </div>
        </header>
    )
}

export default Header