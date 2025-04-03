import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import faqDataGeneral from './faqDataGeneral.json';
import faqDataInsurance from './faqDataInsurance.json';
import faqDataProcess from './faqDataProcess.json';
import faqDataTypes from './faqDataTypes.json';
import faqDataInjury from './faqDataInjury.json';
import faqDataAccident from './faqDataAccident.json';
import faqDataLiability from './faqDataLiability.json';
import Accordion from 'react-bootstrap/Accordion';

const Practice = () => {
  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background practice-areas-bg" data-aos="fade" style={{ backgroundImage: 'url(assets/images/practice-areas/page-title-bg.jpg)' }}>
        <div className="container">
          <span>Practice Areas</span>
          <h1>Practice Areas</h1>
          <p>Legal Expertise Where You Need It Most</p>
          {/* <nav className="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">About</li>
          </ol>
        </nav> */}
        </div>
      </div>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Common Injury Cases We Handle</h2>
        </div>
        <div className="container tabs" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-1">Personal Injury</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">Auto Accident</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">Premises Liability</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Personal Injury Lawsuits</h4>
                      <p>Personal injury claims can arise from a wide range of situations. If you've been harmed due to someone else's negligence or intentional actions, we'll fight to secure the compensation you deserve. Our experienced accident attorneys handle cases involving:</p>
                      <ul>
                        <li><i className="bi bi-symmetry-horizontal"></i>Auto Accidents</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Slip-and-Fall Incidents</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Dog Bites & Animal Attacks</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Assault & Battery Claims</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Wrongful Death Lawsuits</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/practice-personal-injury.jpg" alt="Personal Injury" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Auto Accident Settlements</h4>
                      <p>While passenger vehicles are the most common on the road, they are not the only ones involved in personal injury claims. Such claims can arise from accidents involving:</p>
                      <ul>
                        <li><i className="bi bi-symmetry-horizontal"></i>Cars</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Trucks (including commercial vehicles)</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Bicycles</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Motorcycles</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Pedestrians</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/practice-auto-accident.jpg" alt="Auto Accident" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Premises Liability Claims</h4>
                      <p>When you work with our premises liability attorney, you can pursue financial compensation for injuries sustained on another party's property—whether public, private, or federal. Common examples of premises liability claims include:</p>
                      <ul>
                        <li><i className="bi bi-symmetry-horizontal"></i>Slip-and-fall accidents (e.g., on a wet floor in a grocery store)</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Injuries caused by a collapsing ceiling or structural failure</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Falls due to defective staircases, broken handrails, or elevator malfunctions</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Accidents resulting from inadequate lighting or poorly maintained walkways</li>
                        <li><i className="bi bi-symmetry-horizontal"></i>Harm caused by failure to comply with fire safety regulations or improper evacuation procedures</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/practice-premises-liability.jpg" alt="Premises Liability" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="imageL-swiperR" className="imageL-swiperR section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Why Choose Our Firm?</h2>
        </div>
        <div className="container">
          <div className="row g-0">
            {/* background image display from the top */}
            <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay="100" style={{ backgroundImage: 'url(assets/images/practice-areas/why-us.jpg)', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              {/* You can remove the <img> tag or leave it if you need it for alt text and SEO, but it won't be visible due to the background-image */}
              <img src="assets/images/practice-areas/why-us.jpg" alt="Why Choose Our Firm" style={{ display: 'none' }} />
            </div>
            <div className="col-xl-7 slides position-relative" data-aos="fade-up" data-aos-delay="200">

              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }} // Ensures proper fade transition
                loop={true}
                speed={800}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              >
                <SwiperSlide>
                  <div className="item">
                    <h3>Aggressive Advocacy</h3>
                    <h4 className="mb-3">We don't back down from insurance companies or big corporations</h4>
                    <p className="mb-0">We don't just file paperwork—we fight. Insurance companies and corporations have teams of lawyers working to minimize your claim. At the Law Offices of Brad J. Ahn, we counter with relentless advocacy, leveraging decades of litigation experience to demand what you're owed. Whether through tough negotiation or courtroom battles, we never back down from holding negligent parties accountable.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>Proven Results</h3>
                    <h4 className="mb-3">$50M+ recovered for injury clients in the past year</h4>
                    <p className="mb-0">Results matter. Our proven track record includes millions recovered for injured clients—from six-figure settlements to multi-million-dollar verdicts. While past successes don't guarantee future outcomes, they reflect the relentless dedication and legal expertise we bring to every case. When your future is on the line, you deserve a law firm with a demonstrated ability to win. Let our history of winning work for you.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>No upfront fees</h3>
                    <h4 className="mb-3">You pay nothing unless we win your case</h4>
                    <p className="mb-0">Financial hardship shouldn't deny you justice. That's why we work on a contingency fee basis—you pay nothing unless we win compensation for you. No upfront costs, no hidden fees, no hourly charges. Our success is tied to yours: We only get paid when you do. This ensures we fight tirelessly for the best possible outcome, with no financial risk to you. Your recovery is our priority—call us to start with confidence.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>Multilingual Staff</h3>
                    <h4 className="mb-3">Bridging Languages, Building Connections</h4>
                    <p className="mb-0">Our team includes multilingual staff who are fluent in Spanish, ensuring clear communication and culturally sensitive service for our diverse community. By offering support in multiple languages, we break down barriers and create a welcoming environment where all individuals feel understood and valued. Our staff is dedicated to meeting the unique needs of Spanish-speaking clients with professionalism and respect.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>24/7 Support</h3>
                    <h4 className="mb-3">Emergency? Call us anytime—we're here to help</h4>
                    <p className="mb-0">Injuries don't keep business hours—and neither do we. Whether you're navigating the aftermath of a car accident or seeking guidance during a hospital stay, our team is available 24/7. Day or night, we're here to answer urgent questions, provide support, and help you take the next steps. You don't have to face tough moments alone—call anytime. When you need us most, we're ready to assist.</p>
                  </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Case Works Section */}
      <section id="case-work" className="case-work section">
        <div className="container section-title" data-aos="fade-up">
          <h2>How Your Case Works</h2>
        </div>
        <div className="container tabs" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-case-work-1">Free Consultation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-case-work-2">Investigation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-case-work-3">Negotiation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-case-work-4">Trial (If Needed)</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-case-work-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Get Your Case Evaluated—Fast</h4>
                      <p>Your journey to justice starts with a no-risk, no-obligation conversation. During your free consultation, we'll listen carefully to the details of your accident or injury, assess the legal merits of your case, and provide honest guidance about your options. There's no pressure—just straightforward advice about whether you have a claim and how we can help. This is your opportunity to ask questions and understand your rights before making any decisions.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/case-free-consultation.jpg" alt="Free Consultation" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-case-work-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Building Your Case with Strong Evidence</h4>
                      <p>If you choose to move forward, we immediately launch a thorough investigation to build an unshakable case. Our team will secure critical evidence such as police reports, surveillance footage, medical records, and expert testimony. We'll identify all liable parties—whether it's a negligent driver, a careless property owner, or a corrupt insurance company—and document every dollar you've lost in medical bills, missed wages, and other damages. The stronger our evidence, the stronger your leverage for maximum compensation.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/case-investigation.jpg" alt="Investigation" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-case-work-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Maximizing Your Settlement</h4>
                      <p>With the full weight of evidence behind us, we enter aggressive negotiations with insurance adjusters and defense attorneys. Unlike other firms that push for quick, lowball settlements, we use our decades of experience to counter their tactics and demand what your case is truly worth. We'll keep you informed at every stage, advising whether to accept an offer or escalate your claim—always with your best interests as the priority.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/case-negotiation.jpg" alt="Negotiation" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-case-work-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>We Take You to Court—And Win</h4>
                      <p>While most cases settle out of court, we're fully prepared to take your fight to a jury if necessary. Our trial attorneys have a proven record of winning complex litigation, and we'll meticulously prepare your case for courtroom success. From selecting expert witnesses to crafting compelling arguments, we treat every trial as if it's the most important case of our careers—because to you, it is.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/practice-areas/case-trial.jpg" alt="Trial" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Practice;
