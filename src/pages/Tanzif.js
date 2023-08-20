import React from 'react';
import ProductMenu from "../components/ProductMenu";
import Wrapper from "../components/Wrapper";
import '../assets/css/tanzif.css'

function Tanzif(props) {
    return (
        <Wrapper>
            <ProductMenu/>
            <div className={'tanzif-big'}>
                <div className={'box-tanzif-one'}>
                    <div className={'box-tanzif'}>
                        <img src={'/images/tanz.png'} className={'box-tanzif-past'} alt={'line'}/>
                        <div className={'tanzif-box-one-text'}>
                            <p className={'tanzif-box-text'}>ԲԺՇԿԱԿԱՆ ԲԻՆՏ ՈՉ ՍՏԵՐԻԼ</p>
                            <img src={'/images/Group 55.png'} className={'group-tanzif-one'} alt={'#'}/>
                            <img src={'/images/Group 53.png'} className={'group-tanzif-two'} alt={'#'}/>
                            <img src={'/images/Group 54.png'} className={'group-tanzif-three'} alt={'#'}/>
                        </div>
                        <button className={'tanzif-see'}>ՏԵՍՆԵԼ Ավելին</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Tanzif;