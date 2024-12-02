import { useEffect, useState } from "react";
import { Post } from "../post";
import { PostsContainer } from "./styles";
import { fetchRepositoryIssues } from "../../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Posts() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [issuesData, setIssuesData] = useState<any[]>([]);

  useEffect(() => {
    async function getIssuesData() {
      try {
        const data = await fetchRepositoryIssues();
        setIssuesData(data);
      } catch (error) {
        console.error("Erro ao carregar dados do usuario: ", error);
      }
    }
    getIssuesData();
    console.log(issuesData);
  }, []);
  return (
    <PostsContainer>
      {issuesData.map((issue: any) => (
        <Post
          title={issue.title}
          body={issue.body}
          created_at={formatDistanceToNow(issue.created_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        />
      ))}
    </PostsContainer>
  );
}
