import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Section = styled.section`
  padding: 20px;
`;

const Heading = styled.h3`
  color: #2bb34f;
  text-transform: uppercase;
`;

const Card = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 1px 1px rgb(0 0 0 / 12%);
  border-radius: 20px;
  margin-bottom: 20px;
`;

const CardTitle = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const CardBody = styled.div`
  padding: 0 20px 20px 20px;
`;

const Container = styled.div`
  padding: 20px;
`;

const Document: React.FC = () => (
  <>
    <Title>Document</Title>
    <Section>
      <Heading>Libraries</Heading>
      <Card>
        <CardTitle>React Hooks</CardTitle>
        <CardBody>
          <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noreferrer">
            Document
          </a>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>React Context API</CardTitle>
        <CardBody>
          <a href="https://reactjs.org/docs/context.html" target="_blank"  rel="noreferrer">
            Document
          </a>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>Styled-components</CardTitle>
        <CardBody>
          <a href="https://styled-components.com/" target="_blank"  rel="noreferrer">
            Document
          </a>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>React Hook Form</CardTitle>
        <CardBody>
          <a href="https://react-hook-form.com/" target="_blank"  rel="noreferrer">
            Document
          </a>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>Axios</CardTitle>
        <CardBody>
          <a href="https://axios-http.com/docs/intro" target="_blank"  rel="noreferrer">
            Document
          </a>
        </CardBody>
      </Card>
    </Section>
    <Section>
      <Container>
        <Heading>Structure</Heading>
        <Card>
          <CardTitle>src/app</CardTitle>
          <CardBody>Render Routes/Private Routes</CardBody>
        </Card>
        <Card>
          <CardTitle>src/components</CardTitle>
          <CardBody>Contains components</CardBody>
        </Card>
        <Card>
          <CardTitle>src/config</CardTitle>
          <CardBody>Contains configure files</CardBody>
        </Card>
        <Card>
          <CardTitle>src/constants</CardTitle>
          <CardBody>Contains constant files</CardBody>
        </Card>
        <Card>
          <CardTitle>src/container</CardTitle>
          <CardBody>Contains smart components</CardBody>
        </Card>
        <Card>
          <CardTitle>src/context</CardTitle>
          <CardBody>Contains context files</CardBody>
        </Card>
        <Card>
          <CardTitle>src/hooks</CardTitle>
          <CardBody>Contains custom hook files</CardBody>
        </Card>
        <Card>
          <CardTitle>src/pages</CardTitle>
          <CardBody>Contains pages</CardBody>
        </Card>
        <Card>
          <CardTitle>src/services</CardTitle>
          <CardBody>Contains service files (where API is called)</CardBody>
        </Card>
        <Card>
          <CardTitle>src/styles</CardTitle>
          <CardBody>Contains style files</CardBody>
        </Card>
        <Card>
          <CardTitle>src/types</CardTitle>
          <CardBody>Contains type/entity/model files</CardBody>
        </Card>
      </Container>
    </Section>
  </>
);

export default Document;
