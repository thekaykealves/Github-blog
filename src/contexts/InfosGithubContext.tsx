import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface ProfileInformationsProps {
  avatar_url: string
  login: string
  name: string
  bio: string
  followers: string
  company: string
  html_url: string
}

export interface IssueType {
  id: number
  number: string
  title: string
  body: string
  created_at: string
  comments: number
}

interface InfosGithubType {
  informations: ProfileInformationsProps
  fetchUserData: () => Promise<void>
  fetchAllIssues: () => Promise<void>
  fetchSearchIssue: (query?: string) => Promise<void>
  fetchDatasIssue: (issueNumber: number) => Promise<void>
  issues: IssueType[]
  issue: IssueType
}

interface InfosGithubProviderProps {
  children: ReactNode
}

export const InfosGithubContext = createContext({} as InfosGithubType)

export const usernameGithub = 'thekaykealves'
export const repositoryGithub = 'github-blog'

export function InfosGithubContextProvider({
  children,
}: InfosGithubProviderProps) {
  const [informations, setInformations] = useState(
    {} as ProfileInformationsProps,
  )

  const [issue, setIssue] = useState({} as IssueType)
  const [issues, setIssues] = useState([])

  async function fetchUserData() {
    const response = await api.get(`/users/${usernameGithub}`)

    setInformations(response.data)
  }

  async function fetchAllIssues() {
    const response = await api.get(
      `/repos/${usernameGithub}/${repositoryGithub}/issues`,
    )

    setIssues(response.data)
  }

  const fetchSearchIssue = useCallback(async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${query}repo:${usernameGithub}/github-blog`,
    )

    setIssues(response.data.items)
  }, [])

  async function fetchDatasIssue(issueNumber: number) {
    const response = await api.get(
      `/repos/${usernameGithub}/${repositoryGithub}/issues/${issueNumber}`,
    )

    setIssue(response.data)
  }

  useEffect(() => {
    fetchUserData()
    fetchAllIssues()
  }, [])

  return (
    <InfosGithubContext.Provider
      value={{
        informations,
        fetchUserData,
        fetchAllIssues,
        fetchSearchIssue,
        fetchDatasIssue,
        issues,
        issue,
      }}
    >
      {children}
    </InfosGithubContext.Provider>
  )
}
