import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/S1ro1" className="footer-item">
        <img src="/icons/github.svg" alt="github"></img>
        <p>GitHub</p>
      </a>
      <a href="https://leetcode.com/siro__/" className="footer-item">
        <img src="/icons/leetcode.svg" alt="leetcode"></img>
        <p>LeetCode</p>
      </a>
      <a
        href="https://www.linkedin.com/in/matej-sirovatka-45959b256/"
        className="footer-item"
      >
        <img src="/icons/linkedin.svg" alt="linkedin"></img>
        <p>LinkedIn</p>
      </a>
      <a href="mailto:matej.sirovatka@gmail.com" className="footer-item">
        <img src="/icons/mail.svg" alt="mail"></img>
        <p>Email</p>
      </a>
    </div>
  );
};

export default Footer;
