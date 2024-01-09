import React from 'react'
import Logo from '/img/logo-white.png'
import facebook from '/img/facebook.svg'
import whatsapp from '/img/whatsapp.svg'
import linkedin from '/img/linkedin.svg'
import instagram from '/img/instagram.svg'


const Footer = () => {
  return (
    <>
    <div className="footer-container px-20 bg-gradient-to-r from-[#0076CE] via-[#0076CE] to-[#9400D3]">
        <div className="footer py-10 text-white">
            <div className="top flex items-center justify-between flex-col sm:flex-row gap-10">
                <div className="left">
                    <img src={Logo} alt="" />
                    <p className='text-[14px]'>India's first platform dedicated to<br/> simplifying partner search</p>
                </div>
                <div className="right flex items-center gap-6 text-[14px] flex-wrap justify-evenly">
                    <div>
                        <h3 className='text-[18px]'>COMPANY</h3>
                        <ul>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[18px]'>SOLUTIONS</h3>
                        <ul>
                            <li>Search</li>
                            <li>Connect</li>
                            <li>Research</li>
                            <li>Academy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[18px]'>Resources</h3>
                        <ul>
                            <li>Blogs</li>
                            <li>Forms</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[18px]'>SUPPORT</h3>
                        <ul>
                            <li>Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[18px]'>LEGAL</h3>
                        <ul>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Accessibity</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
            <hr className='bg-white w-full' />
            <br/>
            <div className="bottm ">
                <div className='flex items-center justify-between flex-wrap gap-10'>
                    <h5>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</h5>
                    <div className='flex gap-5 items-center'>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={whatsapp} alt="" /></a>
                        <a href="#"><img src={instagram} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='p-3 bg-black text-white text-center font-thin'>
        <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer
