import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = (opacity) => {
  return (
    <div className="Footer" style={{ opacity: opacity }}>
      <div className="nav">
        <div className="links-box">
          <h2>Web Pages</h2>
          <div className="links">
            <Link to="#" className="link">
              HOME
            </Link>
            <Link to="#" className="link">
              ABOUT US
            </Link>
            <Link to="#" className="link">
              BLOG
            </Link>
            <Link to="#" className="link">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="links-box">
          <h2>Actions</h2>
          <div className="links">
            <Link to="#" className="link">
              LOGIN
            </Link>
            <Link to="#" className="link">
              REGISTER
            </Link>
          </div>
        </div>
        <div className="links-box">
          <h2>Follow us</h2>
          <div className="social-links">
            <a
              href="https://www.instagram.com/coachync.official/"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@coachync"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-tiktok"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="!#" className="link" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/coachync/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <Link to="#">Terms of Service</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Cookie Policy</Link>
        <Link to="#">Refund Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
