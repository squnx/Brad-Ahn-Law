import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';
// import { Carousel, Button, Modal } from 'react-bootstrap';

const Home = () => {
  // const [showPopup, setShowPopup] = useState(true); // Initially show the popup

  // useEffect(() => {
  //   // Optional: add logic here to control when the popup shows, e.g., only on first visit
  //   // For now, it shows on every page load.
  // }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      <section id="hero" className="hero section dark-background">
        <img src="/assets/images/home/hero-bg.jpg" alt="Personal Injury Attorney Los Angeles | Law Offices of Brad J. Ahn" data-aos="fade-in" />
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <h1 data-aos="fade-up">Experience. Integrity. Results.</h1>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>At the Law Offices of Brad J. Ahn, we provide trusted legal counsel and aggressive representation tailored to your needs. With years of experience advocating for our clients, we are committed to protecting your rights and achieving the best possible outcome for your case. Whether you're facing a complex legal challenge or seeking guidance, we stand by you every step of the way. Your future matters—let us fight for it.</p>
              </blockquote>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="/contact" className="btn-get-started">Get Legal Help Now</a>
                <a href="/assets/videos/free-consultation.mp4" className="glightbox btn-watch-video d-flex align-items-center" target="_blank"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-col">
                <div className="img">
                  <img src="/assets/images/home/history.jpg" alt="History of the firm" className="img-fluid" />
                </div>
                <h2 className="title">History of the firm</h2>
                <p>Since 2002, Brad Ahn has been a trusted advocate in Fullerton, CA, offering personalized legal care. We represent individuals, insurance companies, and building owners with expertise, particularly in personal injury matters. Expect dedicated service and a strong commitment to your legal needs from our established firm.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="mission-col">
                <div className="img">
                  <img src="/assets/images/home/mission-values.jpg" alt="Mission and values" className="img-fluid" />
                </div>
                <h2 className="title">Mission and values</h2>
                <p>At the Law Offices of Brad J. Ahn, our mission is to provide compassionate and effective legal representation to individuals and businesses in need. We value integrity, client-centered communication, and a relentless pursuit of justice. We are committed to building strong client relationships and achieving the best possible outcomes for every case.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="mission-col">
                <div className="img">
                  <img src="/assets/images/home/our-approach.jpg" alt="Our Approach" className="img-fluid" />
                </div>
                <h2 className="title">Our Approach</h2>
                <p>We deliver meticulous, client-focused legal strategies with clear communication. Expect tailored solutions and one-on-one attention throughout your case. Building trust, we strive for optimal outcomes through personalized guidance and unwavering advocacy. Our commitment goes beyond representation; we forge lasting client relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {/* <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Site Development Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Some images on this site, which is in preliminary development, including watermarked versions, are temporary and will be replaced with licensable versions after approval.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Home;