
const Footer = () => {
  return (
    // <footer id="footer" className="footer">
    //   <p>&copy; 2024 Your Company</p>
    // </footer>

    <footer id="footer" className="footer coffee-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12 disclaimer">
            <span className="sitename">Attorney Advertising Disclaimer</span>
            <p>The content on this website is for general informational purposes only. Nothing on this site constitutes legal advice for any specific case or situation. Viewing or accessing this information does not establish an attorney-client relationship. For personalized legal counsel, please contact us directly.</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="social-links d-flex justify-content-center">
              {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
              <a href="https://www.google.com/search?q=Law+Offices+of+Brad+J.+Ahn&rlz=1C1GCEU_enUS832US832&oq=Law+Offices+of+Brad+J.+Ahn&aqs=chrome..69i57j69i64j69i61l3&sourceid=chrome&ie=UTF-8#lrd=0x80c2b89b329d2f5b:0x18c7140821663c73,3" title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
              <a href="https://www.yelp.com/biz/law-offices-of-brad-j-ahn-fullerton-3" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
              <a href="https://www.youtube.com/@Brad-Ahn-Law" title="YouTube" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
            </div>
            <div className="credits">
              Powered by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong>mousewurx</strong></a>
            </div>
            <div className="copyright text-center ">
              <p><span>Copyright</span> © {(new Date().getFullYear())} &nbsp;<strong>Law Offices of Brad J. Ahn</strong>&nbsp; <span>All Rights Reserved.</span></p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="social-links d-flex justify-content-center">
          <a href="https://www.google.com/search?q=Law+Offices+of+Brad+J.+Ahn&rlz=1C1GCEU_enUS832US832&oq=Law+Offices+of+Brad+J.+Ahn&aqs=chrome..69i57j69i64j69i61l3&sourceid=chrome&ie=UTF-8#lrd=0x80c2b89b329d2f5b:0x18c7140821663c73,3" title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
          <a href="https://www.yelp.com/biz/law-offices-of-brad-j-ahn-fullerton-3" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
          <a href="https://www.youtube.com/shorts/RqrIaWER0m8" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
        </div>
        <div className="copyright text-center ">
          <p><span>Copyright</span> © {(new Date().getFullYear())} &nbsp;<strong>Law Offices of Brad J. Ahn</strong>&nbsp; <span>All Rights Reserved.</span></p>
        </div>
        <div className="credits">
          Powered by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong>mousewurx</strong></a>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer