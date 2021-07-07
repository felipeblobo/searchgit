import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFooter } from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <p>Alguns direitos reservados.</p>
      <div>
        <a target='_blank'  rel="noreferrer"  href='https://github.com/felipeblobo' ><FontAwesomeIcon className = 'icone' icon={faGithub} size="2x" style={{color: '#f96604'}} /></a>
        <a target='_blank'  rel="noreferrer" href='https://www.linkedin.com/in/felipelobo23/' ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#f96604'}} /></a>
      </div>
      <p>Salvador, Bahia.</p>
    </StyledFooter>
  );
}

