import logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <nav>
            <img src={logo} alt="Logo NaturEmoi" />
                <ul>
                    <li>Accueil</li>
                    <li>Nos meilleures ventes</li>
                    <li>Nos plantes</li>
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