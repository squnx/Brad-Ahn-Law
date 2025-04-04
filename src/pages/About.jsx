import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const About = () => {
  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background about-bg" data-aos="fade" style={{ backgroundImage: 'url(assets/images/about/page-title-bg.jpg)' }}>
        <div className="container">
          <span>About Us</span>
          <h1>About Us</h1>
          <p>Understanding Your Needs, Delivering Results</p>
          {/* <nav className="breadcrumbs">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li className="current">About</li>
            </ol>
          </nav> */}
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Brad J. Ahn</h2>
          {/* <p>Lorem ipsum dolor sit amet</p> */}
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/about/brad-ahn.jpg" className="img-fluid" alt="10 Best Attorneys in 2019" />
            </div>
            <div className="col-lg-8 content">
              <h4>Founding Attorney | Law Offices of Brad J. Ahn</h4>
              <p>Brad J. Ahn is a trial-tested personal injury attorney renowned for his aggressive advocacy on behalf of injured victims across California. With over 22 years of exclusive experience in personal injury litigation, Brad has built a reputation for holding negligent parties accountable—whether reckless drivers, property owners, or corporate entities.</p>
              <p>His practice is rooted in a simple belief: Injury victims deserve uncompromising legal representation to offset the physical, financial, and emotional toll of accidents. Brad's hands-on approach ensures clients never feel like case numbers—he personally oversees every aspect of their claims, from evidence collection to trial verdicts.</p>
              <p><strong>Notable cases include:</strong>
                <ul>
                  {/* <li><i className="bi bi-symmetry-horizontal"></i>$1.2 M court action for a client who was sexually abused.</li> */}
                  <li><i className="bi bi-symmetry-horizontal"></i>$1.2 million court award, demonstrating commitment to survivors of sexual abuse.</li>
                  {/* <li><i className="bi bi-symmetry-horizontal"></i>$1.0 M settlement for work place discrimination.</li> */}
                  <li><i className="bi bi-symmetry-horizontal"></i>$1.0 million settlement, advocating for victims of workplace discrimination.</li>
                  {/* <li><i className="bi bi-symmetry-horizontal"></i>$50 M+ recoveries for auto accident victims.</li> */}
                  <li><i className="bi bi-symmetry-horizontal"></i>Over $50 million recovered, fighting for fair compensation for auto accident victims.</li>
                </ul>
              </p>
              <p className="mb-0"><strong>Education & Qualifications</strong>
                <ul>
                  <li><i className="bi bi-symmetry-horizontal"></i>Juris Doctor (J.D.) - Southwestern University, School of Law, 2002.</li>
                  {/* <li><i className="bi bi-symmetry-horizontal"></i>Bachelor of Arts (B.A.) - [University], [Major], [Year].</li> */}
                  <li><i className="bi bi-symmetry-horizontal"></i>Licensed in Supreme Court of the State of California, 2002.</li>
                  <li><i className="bi bi-symmetry-horizontal"></i>Certified in 10 Best Attorneys - American Institute of Personal Injury Attorneys, 2019.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Philosophy Section */}
      <section id="imageL-swiperR" className="imageL-swiperR section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Firm Philosophy</h2>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay="100">
              <img src="assets/images/about/firm-philosophy.jpg" alt="Firm Philosophy" />
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
                    <h3>Client-Centered Advocacy</h3>
                    <h4 className="mb-3">Your Goals Guide Our Strategy</h4>
                    <p>We don't believe in one-size-fits-all legal solutions. Every client's situation is unique, and we listen first—to your concerns, priorities, and desired outcomes. Whether you're fighting for compensation, protecting your business, or navigating a family crisis, we craft tailored strategies that put your needs at the forefront.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>Integrity Above All</h3>
                    <h4 className="mb-3">Honest Advice, Transparent Process</h4>
                    <p>Trust is the foundation of our practice. We'll always give you straightforward counsel, even when it's not what you want to hear. No false promises, no hidden fees. From initial consultation to case resolution, you'll know exactly where you stand and what to expect.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>Relentless Pursuit of Justice</h3>
                    <h4 className="mb-3">We Fight So You Don't Have To</h4>
                    <p>Justice isn't handed out—it's earned through preparation, persistence, and grit. We combine sharp legal insight with aggressive advocacy to challenge opponents, whether in settlement talks or at trial. When you're up against insurers, corporations, or bureaucratic systems, we level the playing field.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <h3>A Legacy of Leadership</h3>
                    <h4 className="mb-3">Mentoring the Next Generation of Advocates</h4>
                    <p>Brad Ahn isn't just a practitioner—he's a leader. As a frequent speaker at legal conferences and mentor to young attorneys, he shapes the future of the profession. His industry roles, including 10 Best Attorneys in 2019, reflect a commitment to elevating standards of justice for all.</p>
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

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/about/bg-testimonial.jpg" className="testimonial-bg" alt="Law Offices of Brad J. Ahn" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  loop={true}
                  speed={600}
                  autoplay={{
                    delay: 5000,
                  }}
                  slidesPerView="auto"
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-justin.l.jpg" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Justin L.</h4>
                      {/* <h3>Et rerum molestiae aut!</h3> */}
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Attorney Brad provided outstanding support after my recent car accident. He guided me through every step of the process with professionalism and care. He handled my case thoroughly and was always reliable, communicative, and incredibly helpful. I truly felt like I was in good hands from start to finish! </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-nicole-j.jpg" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Nicole J.</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span> I had an excellent experience working with my lawyer Brad Ahn on my car accident case. From start to finish, he was incredibly attentive to my needs, ensuring I felt supported throughout the entire process. His communication was clear, sharp, and precise, keeping me updated at every step. He handled my case with the utmost professionalism, and I couldn't be more grateful for his expertise and care. Highly recommend!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">John Dow</h4>
                      <h3>Et rerum molestiae aut!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">John Dow</h4>
                      <h3>Et rerum molestiae aut!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;