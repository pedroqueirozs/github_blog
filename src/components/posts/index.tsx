import { Post } from "../post";
import { PostsContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";

interface Issue {
  number: number;
  title: string,
  body: string,
  created_at: string
}

export function Posts() {
  const context = useContext(IssuesContext);
  if (!context) {
    return (
      <p>Erro: o contexto não esta definido</p>
    )
  }

  const { issuesData } = context;
  return (
    <PostsContainer>
      {issuesData.map((issue: Issue) => (
        <Post
          key={issue.number}
          numberIssue={issue.number}
          title={issue.title}
          body={issue.body}
          created_at={formatDistanceToNow(new Date(issue.created_at), {
            locale: ptBR,
            addSuffix: true,
          })}
        />
      ))}
    </PostsContainer>
  );
}
