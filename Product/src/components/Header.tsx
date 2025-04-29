import React from 'react'

const Header = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul>
                <li>
                    <span>Home</span>
                    <span>About</span>
                    <span>Product</span>
                </li>
            </ul>
            <div className="rightnav">
                <input type="text" placeholder='Search' id="" />
                <button>LogIn</button>
            </div>
        </nav>
    </div>
  )
}

export default Header