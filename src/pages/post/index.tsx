import { PostDescription } from "../../components/postDescription";
import { PostContainer } from "./styles";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";

export function Post() {
  const { id } = useParams()
  console.log(`Este e o numero da issue clicada, ${id}`)
  const context = useContext(IssuesContext)
  if (!context) {
    return (
      <p>Erro: o contexto não esta definido</p>
    )
  }

  const { issuesData } = context
  const selectedIssue = issuesData.find((issue) => issue.number === parseInt(id || ""));
  if (!selectedIssue) {
    return <p>Issue não encontrada</p>;
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
  );
}
