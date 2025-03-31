import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const Case = () => {
  const isotopeRef = useRef(null);

  useEffect(() => {
    if (isotopeRef.current) {
      imagesLoaded(isotopeRef.current, () => {
        const iso = new Isotope(isotopeRef.current, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          percentPosition: true,
        });

        const filters = document.querySelectorAll('.case-filters li');
        filters.forEach((filter) => {
          filter.addEventListener('click', function () {
            filters.forEach((f) => f.classList.remove('filter-active'));
            this.classList.add('filter-active');
            const filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
          });
        });

        // Initialize GLightbox AFTER Isotope layout is complete
        GLightbox({
          selector: '.glightbox',
        });
      });
    }
  }, []);

  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background about-bg" data-aos="fade" style={{ backgroundImage: 'url(assets/images/about/page-title-bg.jpg)' }}>
        <div className="container">
          <span>Case Studies</span>
          <h1>Case Studies</h1>
          <p>Achieving Favorable Outcomes</p>
        </div>
      </div>

      {/* Success Stories Section */}
      <section id="case" className="case section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Success Stories</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="case-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-injury">Personal Injury</li>
              <li data-filter=".filter-accident">Auto Accident</li>
              <li data-filter=".filter-liability">Premises Liability</li>
            </ul>
            <div className="row gy-4 isotope-container" ref={isotopeRef} data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-injury">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Personal Injury 2024</p>
                </div>
                <div className="case-info">
                  <h4>Personal Injury 2024</h4>
                  <p>In March 2024, Mr. Thomas A., a construction worker, was severely injured in a scaffolding collapse. Our firm secured a significant settlement, covering his medical and financial losses, due to the construction company's negligence.</p>
                  {/* <a href="assets/images/place-holder-1000x750.jpg" title="Personal Injury 2024" data-gallery="case-gallery-injury" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a> */}
                  {/* <a href="case-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-accident">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Auto Accident 2023</p>
                </div>
                <div className="case-info">
                  <h4>Auto Accident 2023</h4>
                  <p>In October 2023, Ms. Sarah B. suffered severe injuries in a collision caused by a distracted driver. Our firm secured a settlement covering her medical bills, lost wages, and rehabilitation. We proved negligence through detailed investigation and expert testimony, ensuring her recovery.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-liability">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Premises Liability 2022</p>
                </div>
                <div className="case-info">
                  <h4>Premises Liability 2022</h4>
                  <p>In November 2022, Mr. David C. slipped on a wet floor at a local grocery store, suffering a fractured hip. Our firm proved the store's negligence in failing to maintain safe conditions. We secured a settlement covering his medical expenses, rehabilitation, and lost income.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-injury">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Personal Injury 2021</p>
                </div>
                <div className="case-info">
                  <h4>Personal Injury 2021</h4>
                  <p>In March 2021, Mr. Thomas A., a construction worker, was severely injured in a scaffolding collapse. Our firm secured a significant settlement, covering his medical and financial losses, due to the construction company's negligence.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-injury">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Personal Injury 2020</p>
                </div>
                <div className="case-info">
                  <h4>Personal Injury 2020</h4>
                  <p>In March 2020, Mr. Thomas A., a construction worker, was severely injured in a scaffolding collapse. Our firm secured a significant settlement, covering his medical and financial losses, due to the construction company's negligence.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-accident">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Auto Accident 2019</p>
                </div>
                <div className="case-info">
                  <h4>Auto Accident 2019</h4>
                  <p>In October 2019, Ms. Sarah B. suffered severe injuries in a collision caused by a distracted driver. Our firm secured a settlement covering her medical bills, lost wages, and rehabilitation. We proved negligence through detailed investigation and expert testimony, ensuring her recovery.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-liability">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Premises Liability 2018</p>
                </div>
                <div className="case-info">
                  <h4>Premises Liability 2018</h4>
                  <p>In November 2018, Mr. David C. slipped on a wet floor at a local grocery store, suffering a fractured hip. Our firm proved the store's negligence in failing to maintain safe conditions. We secured a settlement covering his medical expenses, rehabilitation, and lost income.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-accident">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Auto Accident 2017</p>
                </div>
                <div className="case-info">
                  <h4>Auto Accident 2017</h4>
                  <p>In October 2017, Ms. Sarah B. suffered severe injuries in a collision caused by a distracted driver. Our firm secured a settlement covering her medical bills, lost wages, and rehabilitation. We proved negligence through detailed investigation and expert testimony, ensuring her recovery.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-injury">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Personal Injury 2015</p>
                </div>
                <div className="case-info">
                  <h4>Personal Injury 2015</h4>
                  <p>In March 2015, Mr. Thomas A., a construction worker, was severely injured in a scaffolding collapse. Our firm secured a significant settlement, covering his medical and financial losses, due to the construction company's negligence.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-accident">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Auto Accident 2014</p>
                </div>
                <div className="case-info">
                  <h4>Auto Accident 2014</h4>
                  <p>In October 2014, Ms. Sarah B. suffered severe injuries in a collision caused by a distracted driver. Our firm secured a settlement covering her medical bills, lost wages, and rehabilitation. We proved negligence through detailed investigation and expert testimony, ensuring her recovery.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-liability">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Premises Liability 2013</p>
                </div>
                <div className="case-info">
                  <h4>Premises Liability 2013</h4>
                  <p>In November 2013, Mr. David C. slipped on a wet floor at a local grocery store, suffering a fractured hip. Our firm proved the store's negligence in failing to maintain safe conditions. We secured a settlement covering his medical expenses, rehabilitation, and lost income.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 case-item isotope-item filter-liability">
                <div className="image-container">
                  <img src="assets/images/place-holder-450x300.jpg" className="img-fluid" alt="" />
                  <p className="image-caption">Premises Liability 2012</p>
                </div>
                <div className="case-info">
                  <h4>Premises Liability 2012</h4>
                  <p>In November 2012, Mr. David C. slipped on a wet floor at a local grocery store, suffering a fractured hip. Our firm proved the store's negligence in failing to maintain safe conditions. We secured a settlement covering his medical expenses, rehabilitation, and lost income.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/about/bg-testimonial.jpg" className="testimonial-bg" alt="" />
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
                      {/* <img src="/assets/images/temp/about-450x450-man.png" className="testimonial-img" alt="" /> */}
                      <img src="/assets/images/about/testimonial-450x450-woman-a.png" className="testimonial-img" alt="" />
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
                      <img src="/assets/images/about/testimonial-450x450-woman-b.png" className="testimonial-img" alt="" />
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
                      <img src="/assets/images/about/testimonial-450x450-woman-c.png" className="testimonial-img" alt="" />
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
                      <img src="/assets/images/about/testimonial-450x450-woman-d.png" className="testimonial-img" alt="" />
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
                      <img src="/assets/images/about/testimonial-450x450-woman-e.png" className="testimonial-img" alt="" />
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
                      <img src="/assets/images/about/testimonial-450x450-woman-f.png" className="testimonial-img" alt="" />
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

export default Case;