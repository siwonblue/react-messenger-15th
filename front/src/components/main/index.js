import styled from 'styled-components';

function Main({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  height: 505px;
  padding: 50px 15px;
  background: #262626;
  border-bottom-right-radius: 12px;
`;

export default Main;
