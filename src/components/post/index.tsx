import { PostContainer } from "./styles";

interface PostProps {
  title: string;
  body: string;
  created_at: string;
}

export function Post(props: PostProps) {
  return (
    <PostContainer>
      <div>
        <h3>{props.title}</h3>
        <span>{props.created_at}</span>
      </div>

      <p>{props.body}</p>
    </PostContainer>
  );
}
