import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <a href="#">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </FooterContainer>
  )
}
