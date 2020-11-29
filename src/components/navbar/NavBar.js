import { React } from "react"
import { Link } from "react-router-dom"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      {/* Nurseries */}
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          Nurseries
        </Link>
      </li>
      {/* Distributors */}
      <li className="navbar__item">
        <Link className="navbar__link" to="/distributors">
          Distributors
        </Link>
      </li>
      {/* Retailers */}
      <li className="navbar__item">
        <Link className="navbar__link" to="/retailers">
          Retailers
        </Link>
      </li>
    </ul>
  )
}
