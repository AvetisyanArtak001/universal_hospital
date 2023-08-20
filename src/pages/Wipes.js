import React from 'react';
import ProductMenu from "../components/ProductMenu";
import WIPES from "../data/wipes.json";
import Wrapper from "../components/Wrapper";
import '../assets/css/wipes.css'

function Wipes(props) {
    return (
        <Wrapper>
            <ProductMenu/>
            <div className={'wipes-big'}>
                {
                    WIPES.map((item)=>(
                        <div className={'box-wipes-one'}>
                            <div className={'box-wipes'}>
                                <img src={item.wipes_steril} className={'box-wipes-line'} alt={'past'}/>
                                <img src={item.wipes_image} className={'box-wipes-past'} alt={'line'}/>
                                <p className={'wipes-text-line-one'}>ՍՏԵՐԻԼ</p>
                                <div className={'wipes-box-one-text'}>
                                    <p className={'wipes-box-text'}>{item.wipes_name}</p>
                                    <img src={item.wipes_size} className={'group-wipes-one'} alt={'#'}/>
                                    <img src={item.wipes_count} className={'group-wipes-two'} alt={'#'}/>
                                    <img src={item.wipes_layout} className={'group-wipes-three'} alt={'#'}/>
                                </div>
                                <button className={'wipes-see'}>ՏԵՍՆԵԼ Ավելին</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    );
}

export default Wipes;