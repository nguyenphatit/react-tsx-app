import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.div`
  margin-top: 80px;
  padding: 20px;
`;

const Main: React.FC<Props> = ({ children }) => <Container>{children}</Container>;

export default Main;
