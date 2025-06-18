import "../styles/Footer.scss"
import logo from './../assets/Logo_Kasa_Blanc.svg'

function Footer () {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" className="footerLogo"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer