import './Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src="/images/logo-dark.png" alt="Pizza Spot logo" />
        </div>
        <div className="links">
          <ul>
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li><i className="fab fa-facebook-f"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

