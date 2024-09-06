import CartWidget from `../CartWidget/CartWidget`
import { NavLink, Link } from "react-router-dom";


const NavBar =()=>{
    return (
        <nav className="NavBar">
            <Link to="/" >
            <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={"/category/celular"} className=     {({isActive})=>isActive? `ActiveOption` : `Option`}> Celulares </NavLink>
                <NavLink to={"/category/celular"} className=     {({isActive})=>isActive? `ActiveOption` : `Option`}> Computadoras </NavLink>
                <NavLink to={"/category/celular"} className=     {({isActive})=>isActive? `ActiveOption` : `Option`}> Televisores </NavLink> 
            </div>
        </nav>
    )
}

export default NavBar;