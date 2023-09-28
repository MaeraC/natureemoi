import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import heart from '../assets/heart.png'
import user from '../assets/user.png'
import cart from '../assets/cart.png'
import closeCart from '../assets/close.png'
import { useEffect, useState, useRef } from 'react'

function Nav() {
    const [showCart, setShowCart] = useState(false)
    const [showFavorites, setShowFavorites] = useState(false)
    const [showAccount, setShowAccount] = useState(false)
    const [darkBg, setDarkBg] = useState(false)
    const [showMenu, setShowMenu] = useState(true)
    const [showMenuBurger , setMenuBurger] = useState(false)
    const navRef = useRef(null)

    function handleScroll() {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;
      
        const nav = navRef.current;
        const navHeight = nav.offsetHeight;
      
        if (scrolledFromTop >= navHeight + 1050) {
          nav.style.backgroundColor = '#00000027';
          nav.style.borderBottom = "2px orange solid"
        } else {
          nav.style.backgroundColor = 'none';
        }

        if (window.innerWidth <= 900) { 
            nav.style.background = 'none';
            nav.style.borderBottom = "none"
          }
      }

    function handleCloseCart() {
        setShowCart(false)
        setShowFavorites(false)
        setShowAccount(false)
        setDarkBg(false)
    }

    function handleToggleMenu() {
        setShowMenu(!showMenu)
    }

    function openMenuBurger() {
        setMenuBurger(true)
    }

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 800) {
            setShowMenu(false)
        } 
    }

    window.addEventListener("resize", handleResize)
    handleResize()
 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll);
    }
    }, [])

    return (
        <nav ref={navRef}>
        <Link to="/" className="logo"><img src={logo} alt="Logo NaturEmoi" />NaturEmoi</Link>

        {showMenu && (
            <ul className="menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/toutes-les-plantes">Plantes</Link></li>
                <li><Link to="/#bestsellers" reloadDocument>Meilleures ventes</Link></li>
                <li><Link to="/#contact" reloadDocument>Contact</Link></li>
                <span></span>
                <li className='icon' onClick={() => { setShowFavorites(true); setDarkBg(true) }}><img src={heart} alt="Favoris" /></li>
                <li className='icon' onClick={() => { setShowAccount(true); setDarkBg(true) }}><img src={user} alt="Mon compte" /></li>
                <li className='icon' onClick={() => { setShowCart(true); setDarkBg(true) }}><img src={cart} alt="Mon panier " /></li>
            
        {showCart && (
            <div>
            <img src={closeCart} onClick={handleCloseCart} alt="Fermer le panier" />
            <h2>Votre panier</h2>
            <p>Vous n'avez pas encore d'articles dans votre panier.</p>
            </div>
        )}
        {showFavorites && (
            <div>
            <img src={closeCart} onClick={handleCloseCart} alt="Fermer les favoris" />
            <h2>Vos favoris</h2>
            <p>Vous n'avez pas encore de favoris.</p>
            </div>
        )}
        {showAccount && (
            <div className="account">
            <img src={closeCart} onClick={handleCloseCart} alt="Fermer" />
            <h2>Connexion client</h2>
            <form>
                <div>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" placeholder="votre@email.com" name="email" /><br></br>
                </div>
                <div>
                <label htmlFor="password">Mot de passe</label><br></br>
                <input type="password" placeholder="Votre mot de passe" name="password" /><br></br>
                </div>
                <button className="button" type="submit">Me Connecter</button>
            </form>
            <Link to="">Nouveau client ? Créez votre compte</Link>
            </div>
        )}
        {darkBg && <div className="dark-bg" onClick={handleToggleMenu}></div>}
        </ul>
        )}

        {!showMenu && (
            <button className='open-burger button' onClick={openMenuBurger}>Menu</button>
        )}

        {showMenuBurger && (
            <ul className="menu menu2">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/toutes-les-plantes">Plantes</Link></li>
                <li><Link to="/#bestsellers" reloadDocument>Meilleures ventes</Link></li>
                <li><Link to="/#contact" reloadDocument>Contact</Link></li>
                <span></span>
                <img className="close-menu" onClick={() => setMenuBurger(false)} src={closeCart} alt="fermer le menu" />
            </ul>
        )}

        
        </nav>
    )
}

export default Nav
