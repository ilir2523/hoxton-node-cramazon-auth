import { Link } from "react-router-dom";


function Header() {

  return (
    <header className="header"    >
      <div className="header__logo" >
        Cramazon
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to='/products' >Home</Link>
          </li>
          <li>
            <Link to='/categories' >Categories</Link>
          </li>
          <li>
            <Link to='/basket' >Basket</Link>
          </li>
          {/* <li>
          <input type="search" placeholder="Search product..."  className="searach" 
          onChange={(e) => {
            console.log(e.target.value)}}/>
        </li> */}
        </ul>
      </nav>
      <nav className="header__icons">
        <ul>
          <li>
            <Link to='/'> <img src="/src/images/search_white_24dp.svg"></img> </Link>
          </li>
          <li>
            <Link to='/signIn'> <img src="./src/images/account_circle_white_24dp.svg"></img> </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
