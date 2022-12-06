import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  margin: 0 auto;
  max-width: 864px;

  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 12px 16px;
    color: ${(props) => props.theme['base-span']};
    background: ${(props) => props.theme['base-input']};
    margin-top: 12px;

    &:focus {
      border-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const SearchFormHeader = styled.header`
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }

  span {
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme['base-span']};
  }
`
