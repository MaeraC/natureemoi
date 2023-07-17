import adresse from "../assets/adresse(1).png"
import tel from "../assets/tel.png"
import mail from "../assets/mail.png"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import tw from "../assets/tw.png"

function Footer() {
    return (
        <footer id="contact">
            <div>
                <ul className="contact">
                    <li><img src={adresse} alt="adresse" />7 Place Albert 1er<br></br>34000 Montpellier</li>
                    <li><img src={tel} alt="tel" />01.29.37.41.73</li>
                    <li><img src={mail} alt="email" />contact@naturemoi.com</li>
                </ul>
                <ul className="reseaux">
                    <li><img src={fb} alt="" />Facebook</li>
                    <li><img src={ig} alt="" />Instagram</li>
                    <li><img src={tw} alt="" />Twitter</li>
                </ul>
                <ul className="mentions">
                    <li>Conditions générales de ventes</li>
                    <li>Politique de confidentialité</li>
                    <li>Mentions légales</li>
                    <li>Service client</li>
                </ul>
                <ul className="account">
                    <li>Mon compte</li>
                    <li>M'inscrire</li>
                    <li>Me connecter</li>
                </ul>
            </div>
            <span>©Copyrights 2022 - NaturEmoi - Tous droits réservés.</span>
        </footer>
    )
}

export default Footer