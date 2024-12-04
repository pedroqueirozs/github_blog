import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { PostDescription } from '../../components/postDescription'
import { IssuesContext } from '../../context/IssuesContext'
import { PostContainer } from './styles'

export function Post() {
  const { id } = useParams()
  const context = useContext(IssuesContext)
  if (!context) {
    return <p>Erro: o contexto não esta definido</p>
  }

  const { issuesData } = context
  const selectedIssue = issuesData.find(
    (issue) => issue.number === parseInt(id || ''),
  )
  if (!selectedIssue) {
    return <p>Issue não encontrada</p>
  }

  return (
    <PostContainer>
      <PostDescription
        title={selectedIssue.title}
        body={selectedIssue.body}
        created_at={selectedIssue.created_at}
        comments={selectedIssue.comments}
      />
    </PostContainer>
  )
}
