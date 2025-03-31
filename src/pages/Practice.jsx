import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import facialData from './facialData.json';
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
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              >
                <SwiperSlide>
                  <div className="item">
                    <h3 className="mb-3">Aggressive Advocacy</h3>
                    <h4 className="mb-3">We don't back down from insurance companies or big corporations.</h4>
                    <p className="mb-0">We don't just file paperwork—we fight. Insurance companies and corporations have teams of lawyers working to minimize your claim. At the Law Offices of Brad J. Ahn, we counter with relentless advocacy, leveraging decades of litigation experience to demand what you're owed. Whether through tough negotiation or courtroom battles, we never back down from holding negligent parties accountable.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3 className="mb-3">Proven Results</h3>
                    <h4 className="mb-3">$5M+ recovered for injury clients in the past year.</h4>
                    <p className="mb-0">Results matter. Our track record speaks for itself, with millions recovered for injured clients—from six-figure settlements to multi-million-dollar jury verdicts. While past outcomes don't guarantee future results, our history of success demonstrates the skill and tenacity we bring to every case. You deserve a lawyer with a proven ability to win.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3 className="mb-3">No upfront fees</h3>
                    <h4 className="mb-3">You pay nothing unless we win your case.</h4>
                    <p className="mb-0">Financial stress shouldn't stop you from seeking justice. We work on a contingency basis—meaning you pay nothing unless we recover compensation for you. No hidden fees, no hourly bills. Our interests align with yours: We only succeed when you do.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3 className="mb-3">24/7 Support</h3>
                    <h4 className="mb-3">Emergency? Call us anytime—we're here to help."</h4>
                    <p className="mb-0">Injuries don't wait for business hours, and neither do we. Whether you have an urgent question after a car accident or need guidance during a hospital stay, our team is available around the clock. Call anytime—we're here to help when you need it most.</p>
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

      {/* FAQ Section */}
      {/* <section id="faq" className="faq section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>All You Need to Know About Facial Aesthetic Design</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 d-none d-lg-block" data-aos="fade-up">
              <h2>Have a question?</h2>
              <h4>Check out the FAQ!</h4>
              <div className="faq-arrow" data-aos="fade-up" data-aos-delay="200">
                <svg className="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <Accordion className="faq-container">
                {facialData.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Practice;
