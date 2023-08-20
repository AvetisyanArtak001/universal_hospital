import React from 'react';
import '../assets/css/footer.css'
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className={'footer'}>
            <div className={'foot-box'}>
                <div className={'one'}>
                    <img src={'../images/logo.png'} alt={'foot-logo'}/>
                </div>
                <div className={'two'}>
                    <h5 className={'product'}>ԱՐՏԱԴՐԱՆՔ</h5><br/>
                    <ul className={'menu-bar'}>
                        <li>
                            <Link to={'#'}>ՀԵՂՈՒԿՆԵՐ</Link>
                        </li>
                        <li>
                            <Link to={'#'}>ՔՍՈՒՔՆԵՐ</Link>
                        </li>
                        <li>
                            <Link to={'#'}>ՅՈՒՂԵՐ</Link>
                        </li>
                        <li>
                            <Link to={'#'}>ՈԳԵԹՈՒՐՄԵՐ</Link>
                        </li>
                        <li>
                            <Link to={'#'}>ՓՈՇԻՆԵՐ</Link>
                        </li>
                        <li>
                            <Link to={'#'}>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</Link>
                        </li>
                    </ul>
                </div>
                <div className={'three'}>
                    <h5 className={'service'}>ԿԱՊ ՄԵԶ ՀԵՏ</h5><br/>
                    <ul className={'menu-box'}>
                        <li className={'nav'}>
                            <Link to={'#'}>
                                <img src={'../images/fluent_call-24-filled.png'} style={{width: '15.8px', height: '15.8px'}} alt={'call'}/>
                                Զանգահարեք մեզ: +374 90 000 000
                            </Link>
                        </li><br/>
                        <li className={'nav'}>
                            <Link to={'#'}>
                                <img src={'../images/pepicons_letter.png'} style={{width: '15.8px', height: '15.8px'}} alt={'letter'}/>
                                Էլ հասցե: @mail.ru
                            </Link>
                        </li><br/>
                        <li className={'nav'}>
                            <Link to={'#'}>
                                <img src={'../images/ci_location.png'} style={{width: '15.8px', height: '15.8px'}} alt={'location'}/>
                                Երևան
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={'four'}>
                    <h5 className={'service'}>ՓՆՏՐԵՔ ՄԵԶ։</h5><br/><br/>
                    <div className={'sites'}>
                        <Link to={'#'}>
                            <img src={'../images/instagram.png'} style={{width: '49.5px', height: '49.5px'}} alt={'instagram'}/>
                        </Link>
                        <Link to={'#'}>
                            <img src={'../images/Vector.png'} style={{width: '49.5px', height: '49.5px'}} alt={'twit'}/>
                        </Link>
                        <Link to={'#'}>
                            <img src={'../images/Vector (1).png'} style={{width: '49.5px', height: '49.5px'}} alt={'face'}/>
                        </Link>

                    </div>
                </div>
            </div>
            <div className={'coding'}>
                <p>
                    By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են
                </p>
            </div>
        </div>
    );
}

export default Footer;