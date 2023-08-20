import React from 'react';
import ProductMenu from "../components/ProductMenu";
import Wrapper from "../components/Wrapper";
import '../assets/css/toper.css'

function Toper(props) {
    return (
        <Wrapper>
            <ProductMenu/>
            <div className={'top-big'}>
                <div className={'box-top-one'}>
                    <div className={'box-top'}>
                        <img src={'/images/toper.png'} className={'box-top-past'} alt={'line'}/>
                        <img src={'/images/toper.png'} className={'box-tope-past'} alt={'line'}/>
                        <img src={'/images/toper.png'} className={'box-toper-past'} alt={'line'}/>
                        <div className={'top-box-one-text'}>
                            <p className={'top-box-text'}>ԹՈՓԵՐ</p>
                            <img src={'/images/Group 55.png'} className={'group-top-one'} alt={'#'}/>
                            <img src={'/images/Group 53.png'} className={'group-top-two'} alt={'#'}/>
                            <img src={'/images/Group 54.png'} className={'group-top-three'} alt={'#'}/>
                        </div>
                        <button className={'top-see'}>ՏԵՍՆԵԼ Ավելին</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Toper;