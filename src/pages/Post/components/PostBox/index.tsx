import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinksHeaderBox, PostBoxMain, PostInformations } from './styles'

import { NavLink, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
  InfosGithubContext,
  IssueType,
  repositoryGithub,
  usernameGithub,
} from '../../../../contexts/InfosGithubContext'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContextSelector } from 'use-context-selector'

interface PostBoxProps {
  issue: IssueType
}

export function PostBox({ issue }: PostBoxProps) {
  const { issueNumber } = useParams()

  const fetchDatasIssue = useContextSelector(InfosGithubContext, (context) => {
    return context.fetchDatasIssue
  })

  const informations = useContextSelector(InfosGithubContext, (context) => {
    return context.informations
  })

  useEffect(() => {
    fetchDatasIssue(Number(issueNumber))
  }, [])

  const linkForGitubIssue = `https://github.com/${usernameGithub}/${repositoryGithub}/issues/${issueNumber}`

  return (
    <>
      <PostBoxMain>
        <LinksHeaderBox>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </NavLink>
          <a href={linkForGitubIssue} target="_blank" rel="noreferrer">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </LinksHeaderBox>

        <h5>{issue.title}</h5>

        <PostInformations>
          <span>
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            {informations.login}
          </span>

          <span>
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
            {issue.created_at
              ? formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
              : ''}
          </span>

          <span>
            <div className="icon">
              <FontAwesomeIcon icon={faComment} />
            </div>
            {issue.comments === 1 ? (
              <span>{issue.comments} comentário</span>
            ) : (
              <span>{issue.comments} comentários</span>
            )}
          </span>
        </PostInformations>
      </PostBoxMain>
    </>
  )
}
