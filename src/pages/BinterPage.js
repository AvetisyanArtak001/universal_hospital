import React from 'react';
import Wrapper from "../components/Wrapper";
import ProductMenu from "../components/ProductMenu";
import '../assets/css/binterpage.css'

function BinterPage(props) {
    return (
        <Wrapper>
            <ProductMenu/>
            <div className={'page-box'}>
                <img src={'../images/Group 83.png'} className={'page-img'} alt={'post-c'}/>
                <h3 className={'page-head'}>ԲԺՇԿԱԿԱՆ ԲԻՆՏ ՍՏԵՐԻԼ</h3>
                <p className={'page-text'}>
                    Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                </p>
                <img src={'../images/Group 21.png'} className={'page-one'} alt={'one'}/>
                <img src={'../images/Group 34.png'} className={'page-two'} alt={'two'}/>
                <img src={'../images/Group 33.png'} className={'page-three'} alt={'three'}/>
            </div>
        </Wrapper>
    );
}

export default BinterPage;