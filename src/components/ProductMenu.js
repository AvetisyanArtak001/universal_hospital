import React from 'react';
import { NavLink} from "react-router-dom";
import '../assets/css/productmenu.css'
function ProductMenu(props) {
    return (
        <nav className={'nav-bar'}>
            <ul className={'prod-menu'}>
                <li>
                    <NavLink exact to={'/product'} activeClassName="act">ԲԻՆՏԵՐ</NavLink>
                </li>
                <li>
                    <NavLink to={'/product/tanzif'} activeClassName="act">ԹԱՆԶԻՖՆԵՐ</NavLink>
                </li>
                <li>
                    <NavLink to={'/product/wipes'} activeClassName="act">ԱՆՁԵՌՈՑԻԿՆԵՐ</NavLink>
                </li>
                <li>
                    <NavLink to={'/product/top'} activeClassName="act">ԹՈՓԵՐ</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default ProductMenu;