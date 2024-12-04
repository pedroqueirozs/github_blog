/* eslint-disable camelcase */
import {
  PostDescriptionBody,
  PostDescriptionContainer,
  PostHeader,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import ImageGithub from '../../assets/git_hub.svg'
import IconCalendar from '../../assets/icon_calendar.svg'
import IconComments from '../../assets/icon_comments.svg'
import IconSeta from '../../assets/icon_seta.svg'
import IconLeftArrow from '../../assets/left_arrow_icon.svg'

interface PostDescriptionProps {
  title: string
  body: string
  created_at: string
  comments: number
}

export function PostDescription({
  title,
  body,
  created_at,
  comments,
}: PostDescriptionProps) {
  return (
    <PostDescriptionContainer>
      <PostHeader>
        <div className="links">
          <Link to={'/'}>
            <img src={IconLeftArrow} alt="" /> VOLTAR
          </Link>

          <a
            href="https://github.com/pedroqueirozs/github_blog/issues"
            target="blank"
          >
            VER NO GITHUB <img src={IconSeta} alt="" />{' '}
          </a>
        </div>
        <h3>{title}</h3>
        <div className="tags">
          <span>
            {' '}
            <img src={ImageGithub} alt="" />
            pedroqueirozs
          </span>
          <span>
            {' '}
            <img src={IconCalendar} alt="" />{' '}
            {formatDistanceToNow(new Date(created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          <span>
            {' '}
            <img src={IconComments} alt="" /> {comments}{' '}
            {comments < 1
              ? 'Nenhum comentario'
              : comments === 1
                ? 'Comentario'
                : 'Comentarios'}
          </span>
        </div>
      </PostHeader>

      <PostDescriptionBody>
        <Markdown>{body}</Markdown>
      </PostDescriptionBody>
    </PostDescriptionContainer>
  )
}
