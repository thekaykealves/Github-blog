import styled from 'styled-components'

export const Posts = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`

export const PostPreviewContainer = styled.div`
  width: 415px;
  height: 260px;
  padding: 32px;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  transition: all 0.2s ease-in;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostPreviewTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;

  h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`

export const PostPreviewBody = styled.div`
  height: 50%;
  overflow: hidden;
`

export const NoneFoundIssue = styled.span`
  display: block;
  margin-top: 48px;
  text-align: center;
  font-size: 24px;
`
