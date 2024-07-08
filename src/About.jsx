import Profile from './images/new_profile_image_nobg.png'
import FaceBook from './icons/fb.png'
import Twitter from './icons/twitter.png'
import Github from './icons/github.png'
import Insta from './icons/ig.png'
import Linkedin from './icons/linkedn_icon.png'

export default function About() {
  return (
    <div id="About" className="container">
      <div className=" mt-5 mb-3 text-center">
        <h3>About</h3>
      </div>
      <div className="row">
        <div className="col-md-5 justify-content-center align-items-center d-flex">
          <p>
            Meet <span>Samuel</span> , an AI expert with a flair for  building applications powered by artificial Intelligence. He has
            over 3 years of experience in the field.
            My interests and projects strongly surround the healthcare domain
          </p>
        </div>

        <div className="col-md-4 justify-content-center align-items-center d-flex">
            <img src={Profile} alt="Samuel's profile image"  />
        </div>

        <div className="col-md-3 justify-content-center align-items-center d-flex">
            <a href="https://twitter.com/eskayML" target='_blank'><img src={Twitter} alt="twitter icon" className = 'icon' /></a>
            <a href="https://www.instagram.com/eskayml/" target='_blank'><img src={Insta} alt="twitter icon" className = 'icon' /></a>
            <a href="https://www.facebook.com/eskay.developer/" target='_blank'><img src={FaceBook} alt="twitter icon" className = 'icon' /></a>
            <a href="https://github.com/eskayML" target='_blank'><img src={Github} alt="twitter icon" className = 'icon gh' /></a>
            <a href="https://www.linkedin.com/in/samuel-kalu-3374b1248" target='_blank'><img src={Linkedin} alt="linkedin icon" className = 'icon' /></a>
        </div>
      </div>
    </div>
  );
}


