import React from 'react'
import hero1 from '/img/hero1.png'
import hero2 from '/img/hero2.png'
import hero3 from '/img/hero3.png'


const Hero = () => {
  return (
    <>
        <div className="hero-container max-w-7xl mt-[40px] mx-auto h-full ">
          
            <div className="hero w-[100%] h-[90vh]  md:w-[94%] ml-auto py-7 px-1 ">
              <div className="hero mx-auto flex items-center justify-between  flex-col xl:flex-row gap-9">
               
                <div className="left-container h-[60vh] w-full md:w-[70%] flex z-20">
                    <div className="left p-2  flex flex-col justify-center gap-10 ">
                     
                      <div className="left-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold w-full ">
                        <h1 className='leading-normal text-center :text-left'>Find <span className='left-heading-h1-span bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>Partners</span> (CAs) <br/> available online</h1>
                      </div>

                      <div className="left-para text-sm">
                        <p className='text-center text-sm lg:text-left sm:text-lg'><span className='left-heading-para-span bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CAs for compliance support</p>
                      </div>

                      <div className="left-search-box-container mx-auto p-6 w-full sm:w-[100%] text-center">
                        <div className="left-seacrh-box ">
                          <div className="search-btn  text-center shadow-sm flex flex-col md:flex-row gap-4 md:items-center justify-center">
                            <input type="text" placeholder='Search By Name' className='p-2.5 rounded border '  />
                            <button className='py-3 rounded px-6 bg-custom-color text-white'>Search</button>
                          </div>

                        </div>
                      </div>

                    </div>
                </div>

                <div className="right-container mt-10 ">
                  <div className="right flex p-1 gap-1 sm:gap-6 w-full ">
                    
                    <div className="first-img w-30 sm:w-40">
                      <img src={hero1} alt="" className='relative bottom-0' />
                    </div>

                    <div className="second-img w-30 sm:w-40">
                      <img src={hero2}  alt="" className='relative bottom-16' />
                    </div>

                    <div className="third-img w-30 sm:w-40">
                      <img src={hero3} alt="" className='relative bottom-8' />
                    </div>

                  </div>
                </div>

              </div>
            </div>

        </div> 
    </>
  )
}

export default Hero
