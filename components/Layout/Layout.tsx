import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { Container, Main } from "../../styles/global.styled";

const Layout = (props) => (
  <Main>
    <Container padding='20px'>
      <Header />
      <NavBar />
      {props.children}
    </Container>
  </Main>  
);

export default Layout;