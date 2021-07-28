import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import img_owen from '../images/derek-owens.jpg';
import cropped_nate from '../images/cropped-nate-johnston.jpg';
//import { HashLink } from 'react-router-hash-link';

function Page() {
    return (
        <React.Fragment>
            <Navbar />
            <section id="home">
               <div className="container">
                   <div className="row">
                       <div className="col-md">
                           <h2 style={{color:"#333",fontSize:"36px",paddingTop:"100px"}}>Tomorrow is not promised
                                get an insurance plan
                                today.
                            </h2>
                            <p className="lead">
                            Have a risk management plan today primarily against the risk 
                            of a contingent or uncertain loss, prevent yourself from financial
                            loss or unforseen circumstances by having an insurance plan
                            which bears the risk.
                            </p>
                            <button className="btn-started">GET STARTED</button>
                       </div>
                       <div className="col-md">
                           <div className="img-owen">
                               <img alt="derek owen" src={img_owen} className="img-fluid img1" />
                               <div className="cropped-nate">
                                  <img alt="cropped nate" src={cropped_nate} className="img-fluid img2" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="text-white text-center" style={{background: "#334A79",marginTop:"80px"}}>
                    <div className="container">
                        <div className="row py-5">
                        <div className="col-md p-3">
                            <h2>50k+</h2>
                            <p>Insured Clients</p>
                        </div>
                        <div className="col-md p-3">
                            <h2>50k+</h2>
                            <p>Insurance Plans</p>
                        </div>
                        <div className="col-md p-3">
                            <h2>No.1</h2>
                            <p>Retail Life Insurer</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="#about-us">
                <div className="container">
                    {/**About section */}
                    <h2 className="py-4" style={{color:"#333",fontSize:"36px"}}>About Us</h2>
                    <p style={{color:"#888"}}>
                    Trinity Insurance Plc, established in 2016 is a financial services group with market leading positions in its key business line which is insurance. Our goal as an insurance company is to be the leading insurance comapny in Nigeria - providing life insurance and alsoretirement services as well as risk underwriting to a subtantial and diversified client base, which includes corportions, financialinstitutions, governments and individuals in Ngeria. Trinity Insurance is the market leader in retail life insurance and retirement services making us part of the top 3 in Non - Life insurance in Nigeria. 
                    </p>
                    <button className="btn-started">LEARN MORE</button>
                </div>
            </section>
            <section id="why-us" style={{background:"rgba(187, 187, 187, 0.1)",marginTop:"45px"}}>
                <div className="container">
                   <h2 className="py-5">Why People choose Trinity Insurance</h2>
                   <div className="row">
                       <div className="col-md">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#334A79"/>
                            </svg>
                            <h3>
                            Income Investment Plan
                           </h3>
                           <p>
                           Blends saving with insurance protection and preserves the value of your investment despite the inflationary high
                            trends.
                           </p>
                       </div>
                       <div className="col-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#334A79"/>
                            </svg>
                            <h3>
                            Allocation
                           </h3>
                           <p>
                           A percentage of 10%  contribution shall be provided a
                            life insurance over while the 
                            allocation into the policyowner’s
                            account.
                           </p>
                       </div>
                       <div className="col-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#334A79"/>
                            </svg>
                            <h3>
                            Good and flexible policy
                           </h3>
                           <p>
                           You don’t have to stress yourself over our policies, they’re easy to
                            understand and very flexible so
                            that you as a policy owner can make changes to it later on.
                           </p>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#334A79"/>
                            </svg>
                            <h3>
                            High interest gain
                           </h3>
                           <p>
                           You receive a high interest gain
                            with a very nice rate which will
                            be declared annually and added to the policy owner’s account.
                           </p>
                       </div>
                       <div className="col-md">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#334A79"/>
                            </svg>
                            <h3>
                            Maturity Benefits
                           </h3>
                           <p>
                           Amount payable at maturity shall be the accumulated fund in the policyowner’s account at the maturity date.
                           </p>
                       </div>
                       <div className="col-md">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#334A79"/>
                            </svg>
                            <h3>
                            Early Encashment
                           </h3>
                           <p>
                           You may surrender your IIP policy only after two years provided premiums have been paid thus far.
                           </p>
                       </div>
                   </div>
                </div>
            </section>
            <section id="plans">
                <section className="container">
                    <h2 style={{color:"#333",fontSize:"24px"}} className="py-5">Our plans</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="cards px-3 pt-5">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="white"/>
                            <path d="M26.6668 43.3333V33.3333H33.3335V43.3333H41.6668V30H46.6668L30.0002 15L13.3335 30H18.3335V43.3333H26.6668Z" fill="#BBBBBB"/>
                            </svg>
                            <h3>Housing/Properties Insurance</h3>
                            <p className="card-text">
                            This insurance policy covers your building
                            and house. Helps to bear the risk of unfor-
                            -seen circumstances arising from either 
                            collapse or fire gutting your building, with
                            a premium price of NGN 20,0000 you can
                            get this plan.
                            </p>
                            <button>Start plan</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cards px-3 pt-5">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5333 10.0167C31.2 9.03334 30.2667 8.33334 29.1667 8.33334H10.8333C9.73333 8.33334 8.81667 9.03334 8.46667 10.0167L5 20V33.3333C5 34.25 5.75 35 6.66667 35H8.33333C9.25 35 10 34.25 10 33.3333V31.6667H30V33.3333C30 34.25 30.75 35 31.6667 35H33.3333C34.25 35 35 34.25 35 33.3333V20L31.5333 10.0167ZM10.8333 26.6667C9.45 26.6667 8.33333 25.55 8.33333 24.1667C8.33333 22.7833 9.45 21.6667 10.8333 21.6667C12.2167 21.6667 13.3333 22.7833 13.3333 24.1667C13.3333 25.55 12.2167 26.6667 10.8333 26.6667ZM29.1667 26.6667C27.7833 26.6667 26.6667 25.55 26.6667 24.1667C26.6667 22.7833 27.7833 21.6667 29.1667 21.6667C30.55 21.6667 31.6667 22.7833 31.6667 24.1667C31.6667 25.55 30.55 26.6667 29.1667 26.6667ZM8.33333 18.3333L10.8333 10.8333H29.1667L31.6667 18.3333H8.33333Z" fill="#BBBBBB"/>
                            </svg>
                             <h3>Vehicle Insurance</h3>
                             <p className="card-text">
                             Insure your vehicles by getting a 360 plan
                            which covers your vehicle.
                             </p>
                             <button>Start plan</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cards px-3 pt-5">
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.0002 23.6667V20.3333L18.6668 12V2.83334C18.6668 1.45001 17.5502 0.333344 16.1668 0.333344C14.7835 0.333344 13.6668 1.45001 13.6668 2.83334V12L0.333496 20.3333V23.6667L13.6668 19.5V28.6667L10.3335 31.1667V33.6667L16.1668 32L22.0002 33.6667V31.1667L18.6668 28.6667V19.5L32.0002 23.6667Z" fill="#BBBBBB"/>
                            </svg>
                             <h3>Travel Insurance</h3>
                             <p className="card-text">
                             Get yourself covered while you travel
                            in case of any risk whatsoever during
                            the cause of a trip.
                             </p>
                             <button>Start plan</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center">View more</p>
                </section>
                {/**Testimonials section */}
                <section className="testimonials">
                    <div className="container">
                        <div className="row">
                            <h2>What Our Clients Are Saying</h2>
                            <div className="col">
                                <div className="card">
                                    <p>
                                    As a logistics company, Trinity Insurance has been able to
                                    cover up for our vehicles especially when our drivers are
                                    involved in an accident or their vehicles crashes. With the 
                                    Trinity Life Assurance and Vehicle Insurance plan, We have 
                                    been able to avoid all these.  
                                    </p>
                                </div>
                                <div className="testifier-wrapper">
                                    <span className="person"></span>
                                    <h4>Paul Skylar</h4>
                                    <p>C.E.O  Allover Logistics</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <p>
                                    I have an insurance plan for my kids schooling, it’s a very 
                                    nice plan with a good policy. I don’t have to bother about 
                                    running helter skelter anytime it’s resumption period, I just
                                    request for my pay out once it's time to pay for their fees.
                                    You all should give it a try, it’s worth it!
                                    </p>
                                </div>
                                <div className="testifier-wrapper">
                                    <span className="person"></span>
                                    <h4>Mrs Cooperfield Ashley</h4>
                                    <p>Single Mother</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Page
