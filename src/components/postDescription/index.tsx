import { PostDescriptionContainer, PostHeader } from "./styles";
import IconSeta from "../../assets/icon_seta.svg";
import IconCalendar from "../../assets/icon_calendar.svg";
import ImageGithub from "../../assets/git_hub.svg";
import IconComments from "../../assets/icon_comments.svg";
import IconLeftArrow from "../../assets/left_arrow_icon.svg";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale";


interface PostDescriptionProps {
  title: string;
  body: string;
  created_at: string;
  comments: number
}

export function PostDescription({ title, body, created_at, comments }: PostDescriptionProps) {
  return (
    <PostDescriptionContainer>
      <PostHeader>
        <div className="links">
          <a href="#">
            {" "}
            <img src={IconLeftArrow} alt="" /> VOLTAR
          </a>
          <a href="#">
            {" "}
            VER NO GITHUB <img src={IconSeta} alt="" />{" "}
          </a>
        </div>
        <h3>{title}</h3>
        <div className="tags">
          <span>
            {" "}
            <img src={ImageGithub} alt="" />
            pedroqueirozs
          </span>
          <span>
            {" "}
            <img src={IconCalendar} alt="" /> {formatDistanceToNow(new Date(created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          <span>
            {" "}
            <img src={IconComments} alt="" /> {comments} {comments < 1 ? "Nenhum comentario" : (comments === 1 ? "Comentario" : "Comentarios")}
          </span>
        </div>
      </PostHeader>

      <p>
        {body}
      </p>
    </PostDescriptionContainer>
  );
}
