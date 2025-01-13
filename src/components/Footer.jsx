import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/liciaav">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/licia-vasconcelos-b4b537345">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
