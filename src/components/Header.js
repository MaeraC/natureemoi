
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
    return (
        <>
        <Nav />
            
        <header className="header">
            <div className='slogan'>
                <div>
                    <p>Respirez la nature avec <span>NaturEmoi</span>,<br></br>
                    Un oasis de verdure pour les amoureux des plantes.</p>
                    <Link to="/toutes-les-plantes" className='button'>Choisir ma plante</Link>
                </div>
                </div>
        </header>
        </>
    )
}

export default Header