import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { InfosGithubContext } from '../../../../contexts/InfosGithubContext'
import { SearchFormContainer, SearchFormHeader } from './styles'
import { useContextSelector } from 'use-context-selector'

export function SearchForm() {
  const issues = useContextSelector(InfosGithubContext, (context) => {
    return context.issues
  })

  const fetchSearchIssue = useContextSelector(InfosGithubContext, (context) => {
    return context.fetchSearchIssue
  })

  const SearchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormInput = z.infer<typeof SearchFormSchema>

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchIssue(data: SearchFormInput) {
    await fetchSearchIssue(data.query)
  }

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h5>Publicações</h5>
        <span>{issues.length} publicações</span>
      </SearchFormHeader>

      <form onBlur={handleSubmit(handleSearchIssue)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchFormContainer>
  )
}
