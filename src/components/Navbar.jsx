import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
     <li className="nav-item">
     <Link className="nav-link active" to="/products">Products</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/github">Github</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/photo">Photos</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/ricky">Ricky</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/dog">Doggy</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/fake">Fake</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/country">Country</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/cocktail">Cocktail</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/plato">Plazo</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/button">Button</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/random">Random</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/people">People</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/books">Books</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/meals">Meals</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/crew">Crew</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/rockets">Rockets</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/ships">ships</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/launch">Launch</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/launchpad">Launchpad</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/dragons">Dragons</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar