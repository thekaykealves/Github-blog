import styled from 'styled-components'

export const PostBoxMain = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 32px;

  margin-top: -5rem;

  h5 {
    font-size: 24px;
    line-height: 31.2px;
    margin-top: 20px;
    margin-bottom: 8px;
  }
`

export const LinksHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 19.2px;
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: -0.5rem;

      background-color: ${(props) => props.theme.blue};

      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.2s;
    }
  }
`

export const PostInformations = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;

  .icon {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContentContainer = styled.div`
  width: 100%;
  padding: 40px 32px;
`

export const NoDescription = styled.span`
  display: block;
  margin-top: 48px;
  text-align: center;
  font-size: 24px;
`
