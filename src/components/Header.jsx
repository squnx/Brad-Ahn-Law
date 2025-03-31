import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State to manage the dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown and prevent closing the mobile menu
  const handleDropdownToggle = (event) => {
    event.stopPropagation(); // Prevents the menu from closing
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    // <header id="header" className="header d-flex align-items-center coffee-background sticky-top">
    //   <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    //     <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
    //       {/* <h1 className="sitename">SoCo</h1> */}
    //       <img src="/logo-soco.png" alt="" className="img-fluid"></img>
    //     </NavLink>

    //     <nav id="navmenu" className="navmenu">
    //       <ul>
    //         <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
    //         <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
    //         {/* Dropdown menu */}
    //         <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>

    //           <a href="#" onClick={handleDropdownToggle}>
    //             <span>Services</span>
    //             <i className="bi bi-chevron-down toggle-dropdown"></i>
    //           </a>
    //           {/* Toggle visibility based on state */}
    //           <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
    //             <li><NavLink to="/tlsr" activeclassname="active">TLSR</NavLink></li>
    //             <li><NavLink to="/facial" activeclassname="active">Facial Aesthetic Design</NavLink></li>
    //             <li><NavLink to="/wellness" activeclassname="active">Wellness Program</NavLink></li>
    //             <li><NavLink to="/k-advanced" activeclassname="active">K-advanced</NavLink></li>
    //             <li><NavLink to="/other-treatments" activeclassname="active">Special Treatments</NavLink></li>
    //           </ul>
    //         </li>
    //         {/* <li><NavLink to="/departments" activeclassname="active">Departments</NavLink></li> */}
    //         <li><NavLink to="/promos" activeclassname="active">Promos</NavLink></li>
    //         {/* <li><NavLink to="/gallery" activeclassname="active">Gallery</NavLink></li> */}
    //         <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
    //         {/* <li><NavLink to="https://na02.patientnow.com/a/socowellnessmedspa/" target="_blank" className="cta-btn">Book Online</NavLink></li> */}
    //       </ul>

    //       <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    //     </nav>

    //     <div className="align-items-center work-hour d-none d-sm-block">
    //       <i className="bi bi-clock me-1"></i> Monday - Saturday, 10AM to 6PM
    //     </div>
    //     <div className="header-social-links d-none d-sm-block">
    //       {/* <a href="" className="twitter"><i className="bi bi-twitter-x"></i></a> */}
    //       {/* <a href="https://www.facebook.com/story.php?story_fbid=122105813612709092&substory_index=831504905718856&id=61571272787276&sfnsn=mo&mibextid=RUbZ1f&_rdr" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a> */}
    //       <a href="https://www.facebook.com/profile.php?id=61571272787276" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
    //       <a href="https://www.instagram.com/soco.wm?igsh=MWQ1ZGUxMzBkMA==" title="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
    //       <a href="https://www.google.com/search?rlz=1C1ONGR_enUS1086US1086&sca_esv=1d501c5bd732877f&cs=0&output=search&kgmid=/g/11wv3km60d&q=SOCO+Wellness+Med+Spa&shndl=30&shem=uaasie&source=sh/x/loc/uni/m1/1&kgs=5ae9dd19e809e800#lrd=0x80dd2bb8383f763d:0xbadffea10ceb4a9a,3,,,," title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
    //       <a href="https://www.yelp.com/biz/soco-wellness-med-spa-fullerton" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
    //     </div>

    //   </div>
    // </header>
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="logo-1-600x190.png" alt="Brad Ahn Law Logo" /> */}
          {/* <img src="logo-5-850x260.png" alt="Brad Ahn Law Logo" /> */}
          <img src="adobe-686928770-700x200.png" alt="Brad Ahn Law Logo" />
          {/* <h1 className="sitename">Brad Ahn Law</h1> */}
          {/* Your Rights, Our Priority. */}
          {/* Defending. Resolving. Winning. */}
          {/* Your Justice, Our Commitment. */}
          {/* Your Case. Our Focus. */}
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            <li><NavLink to="/practice-areas" activeclassname="active">Practice Areas</NavLink></li>
            <li><NavLink to="/case-studies" activeclassname="active">Case Studies</NavLink></li>
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            {/* <li><a href="index.html" className="active">Home<br /></a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="blog.html">Blog</a></li> */}
            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
