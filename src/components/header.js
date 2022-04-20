import * as React from "react"
import { Link } from "gatsby"

// markup
const Header = () => {
  return (
    <header class="bg-primary text-white py-2 mb-4">
      <div class="container d-flex justify-content-between align-items-center">
        <div>Family Recipes</div>
        <nav>
          <ul class="list-unstyled d-flex">
            <li>
              <Link to={"/"}>Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
