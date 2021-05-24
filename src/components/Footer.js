import './Footer.css'
import Social from './Social'
import footerImage from '../img/footer-image.jpg'
import portrait from '../img/portrait.png'
import bgSvg from '../img/stars-bg.svg'

function Footer() {
  return (
    <footer className="footer container mg-tp-100">
        <h1 className="section-title">Let's connect</h1>
        <h1 className="email">hello@kristian.co</h1>  
        <hr/>
        <p className="about-me">I love to make things. I have a passion for aesthetics and simple elegance. I possess a growth and curious mindset that reflects in everything I do as a designer.  </p>
        <Social/>
        <p className="Copyright">Kristian Cupurdija ©2021</p>   
      
      <div className="image-footer">
        <img src={bgSvg} class="stars-bg" alt="stars-bg"/>
        <img src={portrait} alt="footer-image"/>
        {//<img src={footerImage} alt="footer-image"/>
        }
      </div>  

    </footer>
  );
}
//style={{backgroundImage: `url(${footerImage})`}}

export default Footer;

