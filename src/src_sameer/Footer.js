import './Footer.scss';
import logo from "./Media/logo.png"
import facebook from "./Media/facebook.png"
import linkedIn from "./Media/linkedIn.png"
import twitter from "./Media/twitter.png"


function Footer() {

  return (

    <div className='container_footer'>
      <div className='content_container'>
      <div className='footer'>
        <div className='sec_1'>
          <img className='logo' src={logo} alt="logo" title="logo" />
          <div className='sec_1_text'>TaxBuddy's intuitive e-filing application ensures filing Accurate tax returns. TaxBuddy leverages technology to bring expert advice to taxpayers at reasonable cost.</div>
        </div>

        <div className='sec_2'>
          <div className='sec_2_header'>Company</div>
          <div>
            <ul type='none'>
              <li>Partner</li>
              <li>Income Tax Guide</li>
              <li>F&O Trading</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQ's</li>
              <li>Calculators</li>
            </ul>
          </div>
        </div>

        <div className='sec_3'>
          <div className='sec_3_header'>Contact Us</div>
          <div>
            <ul type='none'>
              <li>Mobile: +91 93219 08755</li>
              <li>Email: support@taxbuddy.com</li>
              <li>Contact Us</li>
              <li>Team</li>
              <li>News</li>
              <li>Blogs</li>
              <li>Refund Status</li>
            </ul>
          </div>
        </div>

        <div className='sec_4'>
          <div className='sec_4_container'>
            <div className='icon'><img src={twitter} alt="twitter" title="twitter" /></div>
            <div className='icon'><img src={facebook} alt="facebook" title="facebook" /></div>
            <div className='icon'><img src={linkedIn} alt="linkedIn" title="linkedIn" /></div>
          </div>
        </div>



      </div>
      
      </div>
      <div className='copyright'>
        <div className='copyright_text'>Copyright © 2023 SSBA Innovations Ltd. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;