import styled from 'styled-components'

export const PostContainer = styled.div`
  background: ${(props) => props.theme.background_post};
  display: flex;
  border-radius: 8px;
  padding: 20px;
  width: 26rem;
  height: 16rem;
  overflow: hidden;
  text-overflow: ellipsis;

  div {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  h3 {
    flex: 1;
  }
  span {
    font-size: 0.75rem;
  }
`
