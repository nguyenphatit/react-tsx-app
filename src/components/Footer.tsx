import styled from "styled-components";

const Content = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 80px;
  background-color: #111111;
  color: #ffffff;
`

const Footer: React.FC = () => <Content>Footer</Content>;

export default Footer;
