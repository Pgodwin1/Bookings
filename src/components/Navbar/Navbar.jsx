import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <span className="logo">shawnbooking</span>
            <div className="navitem">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar