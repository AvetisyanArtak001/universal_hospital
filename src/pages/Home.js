import React, {useState} from 'react';
import '../assets/css/home.css';
import HOMEPAGE from '../data/homepage.json';
import HOMEVAGA from '../data/homevaga.json'
import Wrapper from "../components/Wrapper";


function Home(props) {
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true)

    }
    return (
        <Wrapper>
            <div className={'back'}>
                <h1 className={'art-box'}>ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</h1>
                <p className={'text-back'}>Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ
                    մանրէազերծված բժշկական վիրակապեր արտադրող;</p>
                <button className={'learn'}>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
                <img src={'./images/Rectangle 104.png'} className={'r'} alt={'back'}/>
                <img src={'./images/Ellipse 1.png'} className={'c'} alt={'c'}/>
            </div>

            <div className={'choose'}>
                <h2 className={'art'}>ԱՐՏԱԴՐԱՆՔ</h2>
                <div className={'copy-choose'}>
                    {
                        HOMEPAGE.map((item)=>(
                            <div className={'box-one'} key={item.id}>
                                <img src={item.img_steril} className={'box-one-line'} alt={'past'}/>
                                <img src={item.image} className={'box-one-past'} alt={'line'}/>
                                <p className={'text-line-one'}>ՍՏԵՐԻԼ</p>
                                <div className={'box-one-text'}>
                                    <p className={'box-text'}>{item.name}</p>
                                    <img src={item.img_size} className={'group-one'} alt={'#'}/>
                                    <img src={item.img_count} className={'group-two'} alt={'#'}/>
                                    <img src={item.img_layout} className={'group-three'} alt={'#'}/>
                                </div>
                                <button className={'see'}>ՏԵՍՆԵԼ Ավելին</button>
                            </div>
                        ))
                    }
                </div>
                <button className={'all'}>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
            </div>

            <div className={'back-box'}>
                <h1 className={'head-box'}>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h1>
                <p className={'text-box'}>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</p>
                <button className={'learn-box'}>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
                <img src={'./images/Rectangle 102.png'} className={'r'} alt={'back'}/>
                <img src={'./images/Ellipse 3.png'} className={'c-box'} alt={'c'}/>
            </div>


            <div className={'choose'}>
                <h2 className={'art'}>ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
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

            <div className={'end-box'}>
                {showModal ? (
                    <div className={"modalWrapper"} onClick={(ev)=>{
                        if (ev.target === ev.currentTarget){
                            setShowModal(false)
                        }
                    }}>

                        <div className={'content'}>
                            <img src={'./images/Group 54 (1).png'} className={'img'} alt={'im'}/>
                        </div>
                    </div>
                ): null}
                <div className={'box-map'}>
                    <p className={'map-tex'}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
                    </p>
                    <img src={'./images/Ellipse 29.png'} className={'end-c'} alt={'c'}/>
                    <div className={'google-map'}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12192.796373179892!2d44.55569177221764!3d40.18238249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcadf143b667%3A0x3d9d42c25cbf0b31!2z1LHWgNaH!5e0!3m2!1sru!2sam!4v1692274390608!5m2!1sru!2sam" width="543" height="266" style={{border:"0", allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade"}}></iframe>
                    </div>
                </div>
                <div className={'box-post'}>
                    <h4 className={'end-text'}>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h4>
                    <form onSubmit={handleSubmit} className={'form'}>
                        <input type="text" className={'input-text'} placeholder={'Անուն'} />
                        <input type="text" className={'input-mail'} placeholder={'Էլ․հասցե'} />
                        <textarea className={'input-textarea'} placeholder={'Հաղորդագրություն'} />
                        <button className={'send'}>ՈՒՂԱՐԿԵԼ</button>
                    </form>
                </div>

            </div>
        </Wrapper>
    );
}

export default Home;