import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: transparent;
  padding: 5rem;

  a {
    float: right;
    text-decoration: none;
    font-size: 25px;
    color: white;
    width: 30px;
    height: 30px;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-span']};
    }
  }
`
