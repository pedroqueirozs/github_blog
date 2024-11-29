import styled from "styled-components";

export const ProfileContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 30px;
background: #0B1B2B;
width: 100%;
height: 13rem;
border-radius: 8px;
padding: 20px;
`

export const ImageAvatar = styled.div`
max-width: 148px;
max-height: 148px;

img{
    height: 100%;
    width: 100%;
border-radius: 8px;

}

`

export const TextContent = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

`
export const NameLinkContainer = styled.div`
display: flex;
justify-content: space-between;

a{
    text-decoration: none;
    color: ${(props) => props.theme["text_links"]}  ;
}

`
export const Info = styled.div`
display: flex;
gap: 30px;

span{
    display: flex;
    gap: 5px;
    align-items: center;
}
`
