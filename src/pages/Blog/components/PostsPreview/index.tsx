import {
  NoneFoundIssue,
  PostPreviewBody,
  PostPreviewContainer,
  PostPreviewTitle,
  Posts,
} from './styles'

import { NavLink } from 'react-router-dom'
import { InfosGithubContext } from '../../../../contexts/InfosGithubContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Markdown from 'markdown-to-jsx'

import { Code } from '../../../../components/Code'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

function PostsPreviewComponent() {
  const issues = useContextSelector(InfosGithubContext, (context) => {
    return context.issues
  })

  function Div({ children }: any) {
    return <div>{children}</div>
  }

  return (
    <div>
      {issues.length > 0 ? (
        <Posts>
          {issues.map((issue) => {
            return (
              <div key={issue.id}>
                <PostPreviewContainer>
                  <NavLink to={`/post/${issue.number}`}>
                    <PostPreviewTitle>
                      <h4>{issue.title}</h4>
                      <span>
                        {formatDistanceToNow(new Date(issue.created_at), {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </span>
                    </PostPreviewTitle>

                    <PostPreviewBody>
                      <Markdown
                        options={{
                          overrides: {
                            p: {
                              component: Div,
                            },
                            a: {
                              component: Div,
                            },
                            code: {
                              component: Code,
                            },
                          },
                        }}
                      >
                        {issue.body || ''}
                      </Markdown>
                    </PostPreviewBody>
                  </NavLink>
                </PostPreviewContainer>
              </div>
            )
          })}
        </Posts>
      ) : (
        <NoneFoundIssue>Nenhuma Issue encontrada !</NoneFoundIssue>
      )}
    </div>
  )
}

export const PostsPreview = memo(PostsPreviewComponent)
