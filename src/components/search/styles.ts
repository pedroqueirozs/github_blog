import styled from 'styled-components'

export const FormSearch = styled.form`
  width: 100%;
  margin-top: 5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  input {
    background-color: ${(props) => props.theme.background_input};
    width: 100%;
    height: 3rem;
    border-radius: 8px;
    border: 1px solid #1c2f41;
    padding: 10px;
  }
  :focus {
    outline: 0;
  }
`
