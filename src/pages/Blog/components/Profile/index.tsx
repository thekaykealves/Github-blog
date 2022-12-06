import {
  InformationsContainer,
  ProfileContainer,
  ProfileInformations,
  ProfileNameAndGithub,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { InfosGithubContext } from '../../../../contexts/InfosGithubContext'
import { useContextSelector } from 'use-context-selector'

export function Profile() {
  const informations = useContextSelector(InfosGithubContext, (context) => {
    return context.informations
  })

  return (
    <ProfileContainer>
      <img src={informations.avatar_url} alt="" />

      <InformationsContainer>
        <ProfileNameAndGithub>
          <h3>{informations.name}</h3>
          <a href={informations.html_url} target="_blank" rel="noreferrer">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileNameAndGithub>

        <p>{informations.bio}</p>

        <ProfileInformations>
          <span>
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            {informations.login}
          </span>
          <span>
            <div className="icon">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            {informations.company === null ? (
              'Nenhuma'
            ) : (
              <span>{informations.company}</span>
            )}
          </span>
          <span>
            <div className="icon">
              <FontAwesomeIcon icon={faUserGroup} />
            </div>
            {informations.followers} seguidores
          </span>
        </ProfileInformations>
      </InformationsContainer>
    </ProfileContainer>
  )
}
