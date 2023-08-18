import Banner from './images/eskayML_logo_face.jpg'
import './Header.css'
import Illustration from './images/chatbot illus.jpg'


export default function Header(){
    return (
        <div className="container Header">
            <div className="row">
                <div className="col-md-6 float-left">
                    <div>
                        <img src={Banner} alt="banner" className="banner__img" />
                        <h1>eskay<span>ML</span></h1>
                    </div>

                    <div className="container mx-auto mt-5  banner__description">
                        <p>I enjoy solving problems using Artificial Intelligence</p> 
                        <p>I build useful and scalable AI applications. </p>
                    </div>
                    
                </div>
                <div className='col-md-6 float-right'>
                    <img src={Illustration} alt="robot illustration"  className="header__illustration" />
                </div>
            </div>
        </div>
    )
}