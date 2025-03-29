import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xxxxxxx', 'service_xxxxxxx', form.current, '0Ue_tdQnQbeZJv_0K')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent. Thank you!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background contact-bg" data-aos="fade" style={{ backgroundImage: 'url(assets/images/contact/page-title-bg.jpg)' }}>
        <div className="container">
          <span>Contact</span>
          <h1>Contact</h1>
          <p>Serving Greater LA with Dedicated Legal Support</p>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail} className="php-email-form mb-0" data-aos="fade-up" data-aos-delay="300">
                <div className="row gy-4">
                  <h4>Reach Out for Expert Legal Assistance</h4>
                  <p className="my-0">Free Initial Consultation—Limited Availability!</p>
                  <div className="col-lg-6">
                    <div className="info-item d-flex align-items-center">
                      <a href="tel:7144493323"><i className="icon bi bi-telephone flex-shrink-0"></i></a>
                      <div>
                        <h4 className="d-flex justify-content-start">Phone</h4>
                        <p>714.449.3323</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-item d-flex align-items-center">
                      <a href="mailto:attorney@bradahnlaw.com"><i className="bi bi-envelope flex-shrink-0"></i></a>
                      <div>
                        <h4 className="d-flex justify-content-start">Email<br /></h4>
                        <p>attorney@bradahnlaw.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="from_name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="4" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col info-wrap mb-0">
                    <h4>Our Location</h4>
                    <p>1400 N Harbor Blvd Suite 900, Fullerton, CA 92835</p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.150414237624!2d-117.92809182483039!3d33.885779826502635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2a761a394dcb%3A0xe3f26659d71c612!2s1440%20N%20Harbor%20Blvd%20%23900%2C%20Fullerton%2C%20CA%2092835!5e0!3m2!1sen!2sus!4v1743118911968!5m2!1sen!2sus"
                      style={{ border: 0, width: '100%', height: '389px' }}>
                    </iframe>
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

export default Contact;