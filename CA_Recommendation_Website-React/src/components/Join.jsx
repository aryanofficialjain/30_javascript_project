import React from "react";

const Join = () => {
  return (
    <>
      <div className="join-container px-10  sm:px-20 mt-[50vh] xl:mt-0">

        <div className="join-item ">
            
          <div className="join-heading text-center font-Poppins text-2xl sm:text-3xl md:text-5xl font-bold  p-2 mb-24">
            <h2 className="mb-2 ">
              Want to 
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] bg-clip-text text-transparent font-Poppins text-5xl font-bold p-2">
                Join
              </span> 
               Us?
            </h2>
            <p className="text-center font-Poppins text-base font-normal leading-[38px]">
              To remain with us, it is essential that you diligently follow the
              steps provided
            </p>
          </div>

          <div className="join-cards w-[100%] px-13 py-5 rounded-3xl bg-gray-100 flex items-center justify-evenly flex-wrap">

            <div className="card-container  max-w-sm p-5 rounded-lg relative ">
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] py-3 px-3.5 text-white rounded-lg absolute left-0 top-0">1
              <sup>st</sup></span>

              <div className="card  rounded-lg bg-white shadow-md  py-6">
                <div className="card-header mb-7">
                <h3 className="text-center font-Poppins text-lg font-bold">
                  Commencement of business
                </h3>
                <p className="text-sm text-center">
                  Invested shareholders must confirm payment and office address
                </p>
                </div>
                

                <div className="card-section bg-gray-100 w-[80%] mx-auto flex items-center justify-between p-3 rounded-xl shadow-md">
                  <div className="date">
                    <h5 className="text-[16px] text-blue-600">Due date</h5>
                    <p className="text-[12px]">
                      Within 180
                      <br /> days
                    </p>
                  </div>

                  <div className="fees">
                    <h5 className="text-[16px] text-red-300">Penalty fees</h5>
                    <p className="text-[12px]">₹50,000 for the company</p>
                    <p className="text-[12px]">₹1,000 /day for directors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container  max-w-sm p-5 rounded-lg relative ">
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] py-3 px-3.5 text-white rounded-lg absolute left-0 top-0">2
              <sup>nd</sup></span>

              <div className="card  rounded-lg bg-white shadow-md  py-6">
                <div className="card-header mb-7">
                <h3 className="text-center font-Poppins text-lg font-bold">
                Auditor Appointment</h3>
                <p className="text-sm text-center">
                Company informs new auditor and submits ADT.1 form to ROC.
                </p>
                </div>
                

                <div className="card-section bg-gray-100 w-[80%] mx-auto flex items-center justify-between p-3 rounded-xl shadow-md">
                  <div className="date">
                    <h5 className="text-[16px] text-blue-600">Due date</h5>
                    <p className="text-[12px]">
                      Within 30
                      <br /> days
                    </p>
                  </div>

                  <div className="fees">
                    <h5 className="text-[16px] text-red-300">Penalty fees</h5>
                    <p className="text-[12px]">₹300 per month.</p>
                    {/* <p className="text-[12px]">₹1,000 /day for directors</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container  max-w-sm p-5 rounded-lg relative ">
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] py-3 px-3.5 text-white rounded-lg absolute left-0 top-0">3
              <sup>rd</sup></span>

              <div className="card  rounded-lg bg-white shadow-md  py-6">
                <div className="card-header mb-7">
                <h3 className="text-center font-Poppins text-lg font-bold">
                DIN eKYC</h3>
                <p className="text-sm text-center">
                Directors share personal information for identification & verification 
                </p>
                </div>
                

                <div className="card-section bg-gray-100 w-[80%] mx-auto flex items-center justify-between p-3 rounded-xl shadow-md">
                  <div className="date">
                    <h5 className="text-[16px] text-blue-600">Due date</h5>
                    <p className="text-[12px]">
                    Every Year
                    </p>
                  </div>

                  <div className="fees">
                    <h5 className="text-[16px] text-red-300">Penalty fees</h5>
                    <p className="text-[12px]">₹5000 one time</p>
                    {/* <p className="text-[12px]">₹1,000 /day for directors</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container  max-w-sm p-5 rounded-lg relative ">
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] py-3 px-3.5 text-white rounded-lg absolute left-0 top-0">4
              <sup>th</sup></span>

              <div className="card  rounded-lg bg-white shadow-md  py-6">
                <div className="card-header mb-7">
                <h3 className="text-center font-Poppins text-lg font-bold">
                DPT-3</h3>
                <p className="text-sm text-center">
                Companies report money taken from people to ROC; auditors confirm details.</p>
                </div>
                

                <div className="card-section bg-gray-100 w-[80%] mx-auto flex items-center justify-between p-3 rounded-xl shadow-md">
                  <div className="date">
                    <h5 className="text-[16px] text-blue-600">Due date</h5>
                    <p className="text-[12px]">
                    Within <br/>
                    30 days
                    </p>
                  </div>

                  <div className="fees">
                    <h5 className="text-[16px] text-red-300">Penalty fees</h5>
                    <p className="text-[12px]">₹300 per month.</p>
                    {/* <p className="text-[12px]">₹1,000 /day for directors</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container  max-w-sm p-5 rounded-lg relative ">
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] py-3 px-3.5 text-white rounded-lg absolute left-0 top-0">5
              <sup>th</sup></span>

              <div className="card  rounded-lg bg-white shadow-md  py-6">
                <div className="card-header mb-7">
                <h3 className="text-center font-Poppins text-lg font-bold">
                MCA Form AOC-4</h3>
                <p className="text-sm text-center">
                It's like an official report card for a company's documents        </p>
                </div>
                

                <div className="card-section bg-gray-100 w-[80%] mx-auto flex items-center justify-between p-3 rounded-xl shadow-md">
                  <div className="date">
                    <h5 className="text-[16px] text-blue-600">Due date</h5>
                    <p className="text-[12px]">
                    On or Before 30th November 
                    </p>
                  </div>

                  <div className="fees">
                    <h5 className="text-[16px] text-red-300">Penalty fees</h5>
                    <p className="text-[12px]">₹200 per day <br/> (No upper limit)</p>
                    {/* <p className="text-[12px]">₹1,000 /day for directors</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container  max-w-sm p-5 rounded-lg relative ">
              <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] py-3 px-3.5 text-white rounded-lg absolute left-0 top-0">6
              <sup>th</sup></span>

              <div className="card  rounded-lg bg-white shadow-md  py-6">
                <div className="card-header mb-7">
                <h3 className="text-center font-Poppins text-lg font-bold">
                MCA Form MGT-7</h3>
                <p className="text-sm text-center">
                Companies must annually report activities and finances to the registrar.</p></div>
                

                <div className="card-section bg-gray-100 w-[80%] mx-auto flex items-center justify-between p-3 rounded-xl shadow-md">
                  <div className="date">
                    <h5 className="text-[16px] text-blue-600">Due date</h5>
                    <p className="text-[12px]">
                    On or Before 31st December
                    </p>
                  </div>

                  <div className="fees">
                    <h5 className="text-[16px] text-red-300">Penalty fees</h5>
                    <p className="text-[12px]">₹200 per day <br/> (No upper limit)</p>
                    {/* <p className="text-[12px]">₹1,000 /day for directors</p> */}
                  </div>
                </div>
              </div>
            </div>




            

            


          </div>


        </div>

        <div className="join-para mt-7 mb-7">
          <p>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 
            <span className="text-bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
        </div>
        


      </div>
    </>
  );
};

export default Join;
