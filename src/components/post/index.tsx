/* eslint-disable camelcase */
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { PostContainer } from './styles'

interface PostProps {
  numberIssue: number
  title: string
  body: string
  created_at: string
}

export function Post({ title, numberIssue, body, created_at }: PostProps) {
  return (
    <PostContainer>
      <Link
        to={`/post/${numberIssue}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div>
          <h3>
            <Markdown>{title}</Markdown>
          </h3>
          <span>
            <Markdown>{created_at}</Markdown>
          </span>
        </div>

        <p>
          <Markdown>{body}</Markdown>
        </p>
      </Link>
    </PostContainer>
  )
}
