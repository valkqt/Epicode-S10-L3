import css from "./css/footer.module.css";
import Container from "react-bootstrap/Container";

function FooterC() {
  return (
    <Container fluid className={css.background}>
      <Container className="text-center">
        <div className={css.faviconBox}></div>
        <div className={css.footerLinks}>
          <div className={css.textBox}>
            <a>Audio and Subtitles</a>
            <a>Media Center</a>
            <a>Privacy</a>
            <a>Contact us</a>
          </div>
          <div className={css.textBox}>
            <a>Audio Description</a>
            <a>Investor Relations</a>
            <a>Legal Notices</a>
          </div>
          <div className={css.textBox}>
            <a>Help Center</a>
            <a>Jobs</a>
            <a>Cookie Preferences</a>
          </div>
          <div className={css.textBox}>
            <a>Gift Cards</a>
            <a>Terms of Use</a>
            <a>Corporate Information</a>
          </div>
        </div>
        <button className={css.serviceButton}>Service Code</button>
        <address>
          &copy; 1993-2019 Netflix, Inc. (i-0d00foda2fdf9c0de)
        </address>
      </Container>
    </Container>
  );
}

export default FooterC;
