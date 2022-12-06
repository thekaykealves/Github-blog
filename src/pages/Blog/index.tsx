import { Header } from '../../components/Header'

import { SearchForm } from './components/SearchForm'
import { PostsPreview } from './components/PostsPreview'
import { Profile } from './components/Profile'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <>
      <Header />

      <BlogContainer>
        <Profile />
        <SearchForm />

        <PostsPreview />
      </BlogContainer>
    </>
  )
}
