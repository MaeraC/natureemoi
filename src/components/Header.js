
import { Link } from 'react-router-dom'
import Nav from './Nav' 
import feuilles from '../assets/bg-header.png'
import plante from '../assets/bg-img.png' 

function Header() {
    return (
        <>
        <Nav />
            
        <header className="header">
            <img className='header-bg' src={feuilles} alt=""></img>
            <div className='content'>
                <div className='txt'>
                    <p className='title'>Les plantes idéales pour votre intérieur</p>
                    <p className="p">Respirez la nature avec NaturEmoi, un oasis de verdure pour les amoureux des plantes.</p>
                    <Link to="/toutes-les-plantes" className='button'>Choisir ma plante</Link>
                </div>
                <div className='imgs'>
                    <img className='plant' src={plante} alt=""></img>
                    <span></span>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header