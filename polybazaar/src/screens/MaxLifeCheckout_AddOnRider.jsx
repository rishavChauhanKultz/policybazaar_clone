import React from "react";
import LifeCover from "../components/sidebar/lifecover";
import CoverUpto from "../components/sidebar/coverupto";
import Monthly from "../components/sidebar/monthly";
import PayFor from "../components/sidebar/payfor";
import "./MaxLifeCheckout_AddOnRider.css";
export default function MaxLifeCheckout_AddOnRider() {
  return (
    <div className="outer-div">
      {/* ***container-1***** */}

      <div className="container-1">
        <div className="side-bar">
          <div
            className="side-bar-top"
            style={{
              width: "400px",
              // backgroundColor: "teal",

              padding: "20px 20px",
              margin: "20px 30px ",
            }}
          >
            <div className="Maxlife">
              <div className="max-logo">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/clientLogo.jpg"/>
              </div>
              <div className="logo-heading">
              <h4>Smart Secure Plus</h4>
              </div>
            </div>
            <LifeCover />
            <CoverUpto />
            <PayFor />
            <Monthly />
          </div>

          <div className="side-bar-bottom">
            <p>Why Policybazaar</p>
            <div className="certificate-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN14aiObhMXPc_QW5O2RxPmdmHsFnqYvmYig&usqp=CAU" />
            </div>
            <br />

            <div className="three-box">
              <div className="first">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/claimSettle.svg" />
                <h3>99.4%</h3>
                <p>claim settlement ratio</p>
              </div>

              <div className="second">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/30Days.svg" />
                <h3>30 Days</h3>
                <p>Easy Refund Policy</p>
              </div>

              <div className="third">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/24Hrs.svg" />
                <h3>24hr</h3>
                <p>Claim Settlement </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side-detail">
        
        <div className="details">
        <div className="detail-heading">
           <span> <p>Your Details</p></span>
           <span> <p>-----------</p></span>
           <span> <p>Upgrade your plan</p></span>
            <span><p>-----------</p></span>
            <p>Add on Riders</p>
          </div>
          <br />
               
          <div className="first-box-a">
              <div className="top-first-a">
                <h3>Critical Illness Benefit</h3>

                <div className="add-button-a">
                  <button>✚ Add</button>
                </div>
              </div>

                <div className="mid-first">
                <div className="para1">
                  <p>Pays you an additional lumpsum amount if you are diagnosed<br/> with a Critical Illness.</p>
                </div>
                <div className="popular-img">
                  <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/mostPopularStump.png"/>
                </div>
              </div>

             
              <div className="bottom-first">
               <div className="critical-p">
                 <p>critical illness variant</p>
                 <p>Cover Value</p>
               </div>

               <div className="cover-head">
                 <h3>Cover 64 Critical illness</h3>
                 <h3 style={{marginRight:"20px"}}>5 Lacs</h3>
               </div>

              </div>
              <div className="additional-1">
                <p>Additional Premium</p>
                <p>Policy Term</p>
              </div>
              <div className="amount-year">
                <h3>₹ 159 Monthly</h3>
                <h3>38 Years</h3>
              </div>
          </div>
          
        </div>

       


        <div className="proceed">
        <button><a href="/payment">Proceed <span>→</span></a></button>
        </div>
        </div>
        

       
      </div>
      

      {/* container-2*/}

      <div className="container-2">
        <div className="cont-2-heading">
          <h2>Free Benefits available under this plan</h2>
        </div>

        <div className="left-right">
          <div className="left">
            <div className="left-img">
              <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/terminalIllness.svg" />
            </div>

            <div className="left-desc">
              <h4>Terminal Illness</h4>
              <p>
                You get 100% of SA (upto 1 Crore) Payout on diagnosis of a
                Terminal illness
              </p>
            </div>
          </div>

          <div className="right">
            <div className="right-img">
              <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/taxBenefit.svg" />
            </div>

            <div className="right-desc">
              <h4>Tax benefit</h4>
              <p>
                Save tax upto Rupee Icon 46,800 every year under Section 80C and
                get 100% tax free returns on maturity
              </p>
            </div>
          </div>
        </div>

        {/* ****container-3********** */}
        <div className="container-3">
          <div className="heading2">
            <h2>Boundary Conditions for this plan</h2>
          </div>

          <div className="outer-box">
            <div className="first-box">
              <div className="img-1">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/lifeCover.svg" />
              </div>

              <div className="desc-left">
                <h3>Life Cover Amount</h3>
                <p>Minimum : ₹ 25 Lacs</p>
                <p>Maximum : ₹ 20 Crores</p>
              </div>
            </div>

            <div className="second-box">
              <div className="img-2">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/coverUpto.svg" />
              </div>

              <div className="desc-mid">
                <h3>Cover yourself Upto</h3>
                <p>Minimum : ₹ 25 Lacs</p>
               <span><p> (Policy Term 10 Years)</p></span>
                <p>Maximum : ₹ 20 Crores</p>
                <span><p>(Policy Term 63 Years)</p></span>
              </div>
            </div>

            <div className="third-box">
              <div className="img-3">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/frequencyPayment.svg" />
              </div>

              <div className="desc-right">
                <h3>Frequency of payment</h3>
                <p>Monthly: ₹ 428</p>

                <p>Quarterly:  ₹ 2,137</p>
                <p>Half Yearly: ₹ 4,200 </p>
                <p>Yearly:   ₹ 8,188  </p>
                <span><p>(save Rupee Icon 10108 in lifetime by choosing Yearly)</p></span>
              </div>
            </div>
          </div>
        </div>

        {/* ******container-4********* */}

        <div className="container-4">
          <div className="heading-3">
          <h3>Number of years you can pay for</h3>
          </div>

          <div className="outer-last-div">
         
            <div className="left-2">
              <div className="img-div-first">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/regularPay.svg" />
              </div>

              <div className="cont-div-first">
                <h3>Regular Pay</h3>
                <p>
                  You pay premiums
                  throughout<br/> the policy duration
                </p>
              </div>
          </div>
            
            
            <div className="mid2">
              <div className="img-div-second">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/limitedPay.svg" />
              </div>

              <div className="cont-div-second">
                <h3>Limited Pay</h3>
                <p>
                Pay premiums for a few years and<br/> stay covered for the entire policy<br/> duration. Choose from 5, 10, 12<br/> and 15 years
                </p>
              </div>
            </div>

            <div className="right2">
              <div className="img-div-last">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/singlePay.svg" />
              </div>

              <div className="cont-div-last">
                <h3>Single Pay</h3>
                <p>
                You pay premium only once and <br/>stay covered for the entire policy <br/> duration
                </p>
              </div>
            </div>

          </div>

            {/* *********short-description****** */}
            <div className="description"> 
              <p>
                **If you are a transgender, please select gender as male and
                mark an email to service.helpdesk@maxlifeinsurance.com
                <br />
                #You can cancel the policy within 30 days of buying and get an
                easy refund for your policy.However for cancellation requests
                within 30 days of
                <br /> issuance of the policy, the expenses incurred by the
                company on medical examination and stamp duty charges shall be
                deducted.
              </p>
           
          </div>
          </div>
       

        {/* *****footer**************/}

        <div className="footer-last">
          <p>
            Policybazaar Insurance Brokers Private Limited (formerly known as
            Policybazaar Insurance Web Aggregator Private Limited) CIN:
            U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector -
            44, Gurgaon, Haryana – 122001
            <br /> Policybazaar is now registered as a Direct Broker
            Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid
            till 09/06/2024, License category- Direct Broker (Life & General)
            Visitors are hereby informed that their information <br />
            submitted on the website may be shared with insurers. Product
            information is authentic and solely based on the information
            received from the insurers. © Copyright 2008-2022 policybazaar.com.
            All Rights Reserved.
          </p>
        </div>


        
      </div>
    </div>
  );
}
