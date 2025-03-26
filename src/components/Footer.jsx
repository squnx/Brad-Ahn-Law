
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
          <a href="https://www.facebook.com/profile.php?id=61571272787276" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/soco.wm?igsh=MWQ1ZGUxMzBkMA==" title="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://www.google.com/search?rlz=1C1ONGR_enUS1086US1086&sca_esv=1d501c5bd732877f&cs=0&output=search&kgmid=/g/11wv3km60d&q=SOCO+Wellness+Med+Spa&shndl=30&shem=uaasie&source=sh/x/loc/uni/m1/1&kgs=5ae9dd19e809e800#lrd=0x80dd2bb8383f763d:0xbadffea10ceb4a9a,3,,,," title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
          <a href="https://www.yelp.com/biz/soco-wellness-med-spa-fullerton" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
        </div>
        <div className="credits">
          Powered by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong>mousewurx</strong></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer