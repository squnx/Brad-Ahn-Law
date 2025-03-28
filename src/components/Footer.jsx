
const Footer = () => {
  return (
    // <footer id="footer" className="footer">
    //   <p>&copy; 2024 Your Company</p>
    // </footer>

    <footer id="footer" className="footer coffee-background">
      <div className="container">
        <div className="copyright text-center ">
          <p><span>Copyright</span> © {(new Date().getFullYear())} &nbsp;<strong>SoCo Wellness MedSpa</strong>&nbsp; <span>All Rights Reserved.</span></p>
          {/* <p><span>Designed and Developed by</span> <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong className="px-1 sitename">mousewurx</strong></a></p> */}
        </div>
        <div className="social-links d-flex justify-content-center">
          {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
          {/* <a href="https://www.facebook.com/story.php?story_fbid=122105813612709092&substory_index=831504905718856&id=61571272787276&sfnsn=mo&mibextid=RUbZ1f&_rdr" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a> */}
          {/* <a href="https://www.facebook.com/profile.php?id=61571272787276" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a> */}
          {/* <a href="https://www.instagram.com/soco.wm?igsh=MWQ1ZGUxMzBkMA==" title="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a> */}
          <a href="https://www.google.com/search?q=Law+Offices+of+Brad+J.+Ahn&rlz=1C1GCEU_enUS832US832&oq=Law+Offices+of+Brad+J.+Ahn&aqs=chrome..69i57j69i64j69i61l3&sourceid=chrome&ie=UTF-8#lrd=0x80c2b89b329d2f5b:0x18c7140821663c73,3" title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
          <a href="https://www.yelp.com/biz/law-offices-of-brad-j-ahn-fullerton-3" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
        </div>
        <div className="credits">
          Powered by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong>mousewurx</strong></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer