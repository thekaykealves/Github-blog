import { InfosGithubContext } from '../../contexts/InfosGithubContext'
import { PostContainer } from './styles'
import { Header } from '../../components/Header'
import { PostBox } from './components/PostBox'
import { PostContent } from './components/PostContent'
import { useContextSelector } from 'use-context-selector'

export function Post() {
  const issue = useContextSelector(InfosGithubContext, (context) => {
    return context.issue
  })

  const issueDescription = issue.body

  return (
    <>
      <Header />

      <PostContainer>
        <PostBox issue={issue} />
        <PostContent issue={issueDescription} />
      </PostContainer>
    </>
  )
}
