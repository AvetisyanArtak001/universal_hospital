import React, {useState} from 'react';
import Wrapper from "../components/Wrapper";
import '../assets/css/feedback.css'

function Feedback(props) {

    const [showFeed, setShowFeed] = useState(false);
    //
    const handleClick = (e) => {
        e.preventDefault()
        setShowFeed(true)

    }

    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true)

    }

    return (
        <Wrapper>
            <div className={'feed-box'}>
                <div className={'feed-copy'}>
                    <div className={'feed-one'}>
                        <h3 className={'feed-head'}>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h3>
                        <img src={'../images/Ellipse 9.png'} className={'feed-c'} alt={'c'}/>
                        <img src={'../images/Rectangle 103.png'} className={'feed-r'} alt={'r'}/>
                        <p className={'feed-text'}>
                            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <form onSubmit={handleSubmit} >
                            <button   className={'feed-click'}>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</button>
                        </form>
                    </div>
                    {showModal ? (
                        <div className={"feedWrapper"} onClick={(ev)=>{
                            if (ev.target === ev.currentTarget){
                                setShowModal(false)
                            }
                        }}>
                            <div className={'feed-content'}>
                                <h4 className={'feed-end-text'}>Պատվիրել զանգ</h4>
                                            <form onSubmit={handleClick} className={'form'}>
                                                <input type="text" className={'input-feed-text'} placeholder={'Անուն'} />
                                                <input type="text" className={'input-feed-mail'} placeholder={'Էլ․հասցե'} />
                                                <input type="text" className={'input-feed-number'} placeholder={'Հեռախեսահամար'} />
                                                <textarea className={'input-feed-textarea'} placeholder={'Ծառայության անվանումը'} />
                                                <button className={'feed-send'}>ՊԱՏՎԻՐԵԼ</button>
                                            </form>
                            </div>
                        </div>
                    ): null}


                    {showFeed ? (
                        <div className={"modalWrapper"} onClick={(ev)=>{
                            if (ev.target === ev.currentTarget){
                                setShowFeed(false)
                            }
                        }}>
                            <div className={'content'}>
                                <img src={'./images/Group 54 (1).png'} className={'img'} alt={'im'}/>
                            </div>
                        </div>
                    ): null}
                    <div className={'feed-two'}>
                        <h3 className={'feed-head-one'}>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ </h3>
                        <img src={'../images/Rectangle 102.png'} className={'feed-r-two'} alt={'r'}/>
                        <img src={'../images/Ellipse 3.png'} className={'feed-c-two'} alt={'c'}/>
                        <p className={'feed-one-text'}>
                            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <form onSubmit={handleSubmit} >
                            <button   className={'feed-click-two'}>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Feedback;