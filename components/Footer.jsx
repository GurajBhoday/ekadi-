import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>E kadi powered by Identisys </p>  
      <p> info@identisys.net</p>
      <p>+254 722 207485</p>
      <p className='icons'>
      <a href="https://www.instagram.com/identisysgroupke/"><AiFillInstagram /></a>
      <a href="https://twitter.com/identisysgroup"><AiOutlineTwitter /></a>
      <a href="https://www.facebook.com/identisysgroup"><AiOutlineFacebook /></a>
      <a href="https://www.linkedin.com/company/identisysltd/"><AiOutlineLinkedin /></a>
      </p>
    </div>
  )
}

export default Footer