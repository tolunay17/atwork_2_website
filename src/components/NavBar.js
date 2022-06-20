import logo from "./assets/logo.png"
import ButtonLogin from "./ButtonLogin"
import styles from "./NavBar.module.scss"

function NavBar() {
  return (
    <>
            <ul className={styles.navigation} >
               <img className={styles.logo} src={logo}></img>
                <li><a href="../components/aboutGreen.js">Over green guide</a></li>
                <li><a href="../components/aboutGreen.js">De App</a></li>
                <li><a href="../components/aboutGreen.js">Voor Bedrijven</a></li>
                <li><a href="../components/aboutGreen.js">Contact</a></li>
                <li><ButtonLogin/></li>
            </ul>
    </>
  )
}

export default NavBar