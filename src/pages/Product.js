import React from 'react';
import Wrapper from "../components/Wrapper";
import ProductMenu from "../components/ProductMenu";
import '../assets/css/bandag.css'

import {Link} from "react-router-dom";

function Product(props) {
    return (
        <Wrapper>
            <ProductMenu/>
            <div className={'bint-big'}>
                <div className={'box-bint-one'}>
                    <div className={'box-bint'}>
                        <img src={'/images/Vector 42.png'} className={'box-bint-line'} alt={'past'}/>
                        <img src={'/images/past.png'} className={'box-bint-past'} alt={'line'}/>
                        <p className={'bint-text-line-one'}>ՍՏԵՐԻԼ</p>
                        <div className={'bint-box-one-text'}>
                            <p className={'bint-box-text'}>ԲԺՇԿԱԿԱՆ ԲԻՆՏ ՍՏԵՐԻԼ</p>
                            <img src={'/images/Group 55.png'} className={'group-bint-one'} alt={'#'}/>
                            <img src={'/images/Group 53.png'} className={'group-bint-two'} alt={'#'}/>
                            <img src={'/images/Group 54.png'} className={'group-bint-three'} alt={'#'}/>
                        </div>
                        <button className={'box-see'}>
                            <Link to='/product/page'>ՏԵՍՆԵԼ Ավելին</Link>
                        </button>
                    </div>
                </div>

                <div className={'box-bint-one'}>
                    <div className={'box-bint'}>
                        <img src={'/images/past.png'} className={'box-bint-past'} alt={'line'}/>
                        <div className={'bint-box-one-text'}>
                            <p className={'bint-box-text'}>ԲԺՇԿԱԿԱՆ ԲԻՆՏ ՈՉ ՍՏԵՐԻԼ</p>
                            <img src={'/images/Group 55.png'} className={'group-bint-one'} alt={'#'}/>
                            <img src={'/images/Group 53.png'} className={'group-bint-two'} alt={'#'}/>
                            <img src={'/images/Group 54.png'} className={'group-bint-three'} alt={'#'}/>
                        </div>
                        <button className={'box-see'}>
                            <Link to='/product/page'>ՏԵՍՆԵԼ Ավելին</Link>

                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Product;