import styled from "styled-components";

export const PostContainer = styled.div`
background: ${(props)=> props.theme["background_post"]};
border-radius: 8px;
padding: 10px;
max-width: 26rem;

div{
    display: flex;
    gap: 20px;
    justify-content: space-between;

}
h3{
    flex: 1;
}
span{
    font-size: .75rem;
};
`