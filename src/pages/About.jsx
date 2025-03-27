import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


<script type="application/json" className="swiper-config">
{JSON.stringify({ // Use JSON.stringify() to convert the object to a string
  "loop": true,
  "speed": 600,
  "autoplay": {
    "delay": 5000
  },
  "slidesPerView": "auto",
  "centeredSlides": true,
  "pagination": {
    "el": ".swiper-pagination",
    "type": "bullets",
    "clickable": true
  },
  "navigation": {
    "nextEl": ".swiper-button-next",
    "prevEl": ".swiper-button-prev"
  }
})}
</script>

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
          {/* <p>Your Path to Radiant Health and Beauty</p> */}
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/about/brad-ahn.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-8 content">
              <h4>Experienced Legal Advocate</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              <p>Aliquam quis dolor mauris. Integer nisi magna, semper eu faucibus et, vestibulum quis ligula. Phasellus sagittis mollis venenatis. Aenean sed augue non felis blandit blandit. Curabitur a posuere enim. Aliquam luctus ipsum a condimentum finibus. Aliquam in enim a sapien maximus porttitor. Nunc et mauris vel dolor consequat hendrerit vitae non lorem. Morbi iaculis tellus quis ex aliquet, eu viverra diam pellentesque. Nunc in dolor vitae enim pharetra pulvinar. Fusce fringilla nisl id rhoncus vulputate. Nulla ut posuere ante. </p>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="why-us section">
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay="100">
              <img src="assets/images/about/why-us-bg.jpg" alt="" />
            </div>
            <div className="col-xl-7 slides position-relative" data-aos="fade-up" data-aos-delay="200">
            <Swiper
             modules={[Autoplay, Pagination, Navigation]}
             loop={true}
             speed={600}
             autoplay={{ delay: 5000 }}
             slidesPerView={'auto'}
             centeredSlides={true}
             pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
             navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
           >
             <SwiperSlide>
               <div className="item">
                 <h3 className="mb-3">Let's grow your business together</h3>
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
           </Swiper>
           <div className="swiper-pagination"></div>
           <div className="swiper-button-prev"></div>
           <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="professionals" className="professionals section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Professionals</h2>
          <p>Expert Care by Our Skilled Staffs</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                <i className="fas fa-user-md flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Boyoung S.</span>
                  <p>M.D.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Kate J.</span>
                  <p>NP</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Soojin L.</span>
                  <p>NP</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Terri S.</span>
                  <p>RN</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                {/* <i className="fa-solid fa-user flex-shrink-0"></i> */}
                <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Irene  C.</span>
                  <p>Sonographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/bg-testimonial.jpg" className="testimonial-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Heartfelt Stories from Our Valued Guests</p>
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
                      <h4 className="mt-3">Sunny</h4>
                      <h3>Transformative Experience!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I've tried many medspa services before, but SoCo MedSpa stands out. Their TLSR combo completely rejuvenated my skin.!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450-woman-b.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Susan</h4>
                      <h3>Professional and Caring Staff</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>The team at SoCo is amazing. They take the time to explain everything and make you feel so comfortable. I've seen real results with their RF microneedling and  PRP treatment!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450-woman-c.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Michelle</h4>
                      <h3>Incredible Value!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I was amazed by how affordable their treatments are compared to other medspas. The quality of service is outstanding, and the results speak for themselves!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450-woman-d.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Jasmin</h4>
                      <h3>Customized Care</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>SoCo MedSpa truly listens to your concerns and provides tailored treatments. My skin has never looked better after the TLSR combo!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450-woman-e.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Esther</h4>
                      <h3>Absolutely Amazing Results!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I've struggled with skin texture issues for years, but after trying the TLSR combo treatment, my skin has transformed. The RF microneedling, Ulthera ,MTS +soco solution and PRP were a game changer!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/about/testimonial-450x450-woman-f.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Stella</h4>
                      <h3>Affordable and Exceptional Care</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I couldn't believe how great the prices are for such high-quality treatments. SoCo MedSpa delivers excellent results without breaking the bank!</span>
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