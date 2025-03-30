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
              <img src="/assets/images/about/brad-ahn.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-8 content">
              <h4>Experienced Legal Advocate</h4>
              <p><strong>Detailed biography</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p><strong>Education and qualifications</strong> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              <p className="mb-0"><strong>Professional affiliations</strong> Aliquam quis dolor mauris. Integer nisi magna, semper eu faucibus et, vestibulum quis ligula. Phasellus sagittis mollis venenatis. Aenean sed augue non felis blandit blandit. Curabitur a posuere enim. Aliquam luctus ipsum a condimentum finibus. Aliquam in enim a sapien maximus porttitor. Nunc et mauris vel dolor consequat hendrerit vitae non lorem. Morbi iaculis tellus quis ex aliquet, eu viverra diam pellentesque. Nunc in dolor vitae enim pharetra pulvinar. Fusce fringilla nisl id rhoncus vulputate. Nulla ut posuere ante.</p>
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
              <img src="assets/images/about/firm-philosophy.jpg" alt="" />
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
                 <h3 className="mb-3">Amet cumque nam sed voluptas</h3>
                 <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="item">
                 <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
                 <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                 <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="item">
                 <h3 className="mb-3">Aliquid non alias minus</h3>
                 <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                 <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="item">
                 <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
                 <h4 className="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.</h4>
                 <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</p>
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

      {/* Professionals Section */}

      {/* Testimonials/Success Stories Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/about/bg-testimonial.jpg" className="testimonial-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Success Stories</h2>
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

export default About;