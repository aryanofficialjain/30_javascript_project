import React from 'react'
import Acadamy from '/img/acadamy.svg'
import Connect from '/img/connect.svg'
import Research from '/img/research.svg'
import Search from '/img/search.svg'
import Platform1 from '/img/platform1.png'
import Platform2 from '/img/platform2.png'


const Platform = () => {
  return (
    <>
      <div className="platform-container w-full ">
        <div className="platform p-10 md:p-28 flex ">
            <div className="container flex-col xl:flex-row flex ">
                <div className="left  text-center xl:text-left xl:w-[50%] flex flex-col gap-8 ">
                    
                    <div className="heading text-xl sm:text-5xl py-2 ">
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>All-in-One</span> platform <br/>that Makes Easier
                    </div>

                    <div className="para text-sm font-normal md:text-xl w-[100%] mx-auto  py-7 md:font-thin">
                        <p>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                    </div>
                    
                    <div className="left-bottom max-w-[95%] mx-auto ">
                        <div className="top flex flex-wrap text-left items-center justify-evenly p-2">
                            <div className='flex gap-1 mb-3'>
                                <img src={Search} alt=""  className='w-[20%] sm:w-[40%]'/>
                                <p className='font-medium'><span className='font-bold'>SEARCH</span> for <br/>vital company <br/>information</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src={Connect} alt="" className='w-[20%] sm:w-[40%]'/>
                                <p className='font-medium'><span className='font-bold'>CONNECT</span> with the <br/> resources to meet<br/> your business needs</p>
                            </div>
                        </div>
                    

                        <div className="bottom flex flex-wrap gap-4 text-left items-center justify-evenly p-2">
                            <div className='flex gap-1 mb-3'>
                                <img src={Research} alt="" className='w-[20%] sm:w-[40%]' />
                                <p className='font-medium'><span className='font-bold'>RESEARCH</span> and<br/> generate reports <br/>that drive growth</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src={Acadamy} alt="" className='w-[20%] sm:w-[40%]' />
                                <p className='font-medium'><span className='font-bold'>ACADEMY</span> to give you<br/> the skills for success <br/> in your career</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="right w-full xl:w-[50%]  py-5 ">
                <div className='flex w-[93%] mx-auto items-center justify-evenly'>
                    <div className='text-[12px] flex flex-col gap-3'>
                        <p className='p-2 rounded-2xl bg-pink-100'>Hey, check out loreumipsum services. </p>
                        <p className='p-2 rounded-2xl bg-pink-100'>I learned from their videos, got my first job.</p>
                        <p className='p-2 rounded-2xl bg-pink-100'>You won't be disappointed with their services.</p>
                    </div>
                    <div className='w-50%'>
                        <img src={Platform1} alt="" className='rounded-full' />
                        
                    </div>
                </div>

                <div className='flex flex-row-reverse w-[93%]  mx-auto items-center justify-evenly'>
                    <div className='text-[12px] flex flex-col gap-3'>
                        <p className='p-2 rounded-2xl bg-blue-200'>I got a perfect analysis report from them too</p>
                        <p className='p-2 rounded-2xl bg-blue-200'>Oh, that's great.</p>
                    </div>

                    <div className='w-50%'>
                        <img src={Platform2} alt="" className='rounded-full' />
                    </div>
                      
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>

  )
}

export default Platform

