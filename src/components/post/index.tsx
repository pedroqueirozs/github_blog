import { PostContainer } from "./styles";
import { Link } from "react-router-dom";

interface PostProps {
  numberIssue: number
  title: string;
  body: string;
  created_at: string;
}

export function Post({ title, numberIssue, body, created_at }: PostProps) {
  return (
    <PostContainer>
      <Link to={`/post/${numberIssue}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <h3>{title}</h3>
          <span>{created_at}</span>
        </div>

        <p>{body}</p>
      </Link>
    </PostContainer>
  );
}
