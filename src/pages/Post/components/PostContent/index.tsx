import { ContentContainer } from './style'

import Markdown from 'markdown-to-jsx'
import { Code } from '../../../../components/Code'

export function PostContent({ issue }: any) {
  function Div({ children }: any) {
    return <div>{children}</div>
  }

  return (
    <ContentContainer>
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
        {issue || ''}
      </Markdown>
    </ContentContainer>
  )
}
