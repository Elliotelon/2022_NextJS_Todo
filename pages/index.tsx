import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h1>hello Styled-components</h1>
      <h2>hello Styled-components</h2>
    </Container>
  );
};

export default index;
