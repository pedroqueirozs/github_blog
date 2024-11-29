import styled from "styled-components";

export const PostDescriptionContainer = styled.div`
  width: 54rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: -60px;
  gap: 40px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 20px;
  background: #0b1b2b;
  border-radius: 8px;

  .links {
    display: flex;
    justify-content: space-between;
  }
  .links a {
    color: ${(props) => props.theme["text_links"]};
    text-decoration: none;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .tags {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .tags span {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;
