
import Nav from './Nav'

function Header() {
    return (
        <>
        <Nav />
            
        <header className="header">
            <div className='slogan'>
                <div>
                    <p>Respirez la nature avec <span>NaturEmoi</span>,</p>
                    <p>Un oasis de verdure pour les amoureux des plantes.</p>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header