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

const Faq = () => {
  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background faq-bg" data-aos="fade" style={{ backgroundImage: 'url(assets/images/faq/page-title-bg.jpg)' }}>
        <div className="container">
          <span>FAQ</span>
          <h1>FAQ</h1>
          <p>Your Guide to Legal Clarity</p>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="faq section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="mb-3">Personal Injury Cases</h4>
              <Accordion className="faq-container">
                {faqDataInjury.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <h4 className="mb-3 mt-4">Auto Accident Cases</h4>
              <Accordion className="faq-container">
                {faqDataAccident.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <h4 className="mb-3 mt-4">Premises Liability Cases</h4>
              <Accordion className="faq-container">
                {faqDataLiability.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="mb-3">General Inquiries</h4>
              <Accordion className="faq-container">
                {faqDataGeneral.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <h4 className="mb-3 mt-4">Dealing with Insurance Companies</h4>
              <Accordion className="faq-container">
                {faqDataInsurance.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <h4 className="mb-3 mt-4">Case Process and Legal Representation</h4>
              <Accordion className="faq-container">
                {faqDataProcess.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <h4 className="mb-3 mt-4">Specific Accident Types</h4>
              <Accordion className="faq-container">
                {faqDataTypes.map((faq, index) => (
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
      </section>
    </>
  );
}

export default Faq;
