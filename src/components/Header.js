import '../assets/css/header.css'
import { NavLink} from "react-router-dom";

function Header(props) {

    return (
        <div className={'head'}>
            <div className={'logo'}>
                <img src={'../images/logo1.png'} alt={'logo'}/>
            </div>
            <ul className={'menu'}>
                <li className={'home'}>
                    <NavLink exact to={'/'} activeClassName="active">ԳԼԽԱՎՈՐ</NavLink>
                </li>
                <li className={'about'}>
                    <NavLink to={'/about-us'} activeClassName="active" >ՄԵՐ ՄԱՍԻՆ</NavLink>
                </li>
                <li className={'products'}>
                    <NavLink to={'/product'} activeClassName="active">ԱՐՏԱԴՐԱՆՔ</NavLink>
                </li>
                <li className={'feedback'}>
                    <NavLink to={'/Feedback'} activeClassName="active">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>
                </li>
                <li className={'workers'}>
                    <NavLink to={'/coworkers'} activeClassName="active">ԳՈՐԾԸՆԿԵՐՆԵՐ</NavLink>
                </li>
                <li className={'services'}>
                    <NavLink to={'/services'} activeClassName="active">ՀԵՏԱԴԱՐՁ ԿԱՊ</NavLink>
                </li>
            </ul>
            <ul className={'flag'}>
                <li>
                    <img src={'../images/flag.png'} alt={'arm'}/>
                </li>
            </ul>
        </div>
    );
}

export default Header;