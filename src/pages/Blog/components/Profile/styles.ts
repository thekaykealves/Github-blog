import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 864px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 32px;

  margin-top: -5rem;

  display: flex;
  gap: 32px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`

export const InformationsContainer = styled.div`
  width: 100%;

  p {
    height: 52px;
    max-height: 52px;
  }
`

export const ProfileNameAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    gap: 8px;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0.5rem;

      background-color: ${(props) => props.theme.blue};

      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.2s;
    }
  }
`

export const ProfileInformations = styled.div`
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
  }
`
