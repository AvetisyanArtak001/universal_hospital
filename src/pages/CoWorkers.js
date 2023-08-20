import React from 'react';
import Wrapper from "../components/Wrapper";
import HOMEVAGA from "../data/homevaga.json";
import '../assets/css/coworkers.css'

function CoWorkers(props) {
    return (
        <Wrapper>
            <div className={'choose'}>
                <div className={'copy-choose'}>
                    {
                        HOMEVAGA.map((itemImg)=>(
                            <div className={'vaga-one'} key={itemImg.id}>
                                <img src={itemImg.img_vaga} className={'box-vaga'} alt={'past'}/>
                            </div>
                        ))
                    }
                </div>
                <button className={'all'}>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
            </div>
        </Wrapper>
    );
}

export default CoWorkers;